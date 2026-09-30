'use server'
import { uploadOnCloudinary } from "@/lib/cloudinary"
import connectDB from "@/lib/db"
import { deleteFromCloudinary } from "@/lib/deleteCloudinary"
import User from "@/models/user-model"
import { revalidatePath } from "next/cache"
import { GetAuth } from "./auth-action"


// ADD USER ACTION 
export async function UserAction(formData) {
    try {
        const { name, photo, overview, contact, privatePhoto, comment } = Object.fromEntries(formData)
        if (!name) return {
            status: false,
            message: "name are required"
        }

        let result
        if (photo || photo.size > 0) {
            result = await uploadOnCloudinary('mystuff/user', photo)
            if (!result) return {
                status: false,
                message: 'photo upload failed.'
            }

        }
        // connect database

        await connectDB()

        const users = await User.create({
            name,
            photo: {
                url: result.url,
                publicId: result.publicId
            },
            overview,
            contact,
            comment

        })

        if (!users) return {
            status: false,
            message: "User Not Created"
        }
        revalidatePath('/users')
        return {
            status: true,
            message: 'Users Created successfully.',

        }

    } catch (error) {

        console.log(error.message)
        return {
            status: false,
            message: error.message || 'Something went wrong!'
        }
    }

}

// GET USER DATA 

export async function GetUserData() {
    try {
        await connectDB()

        const data = await GetAuth()

        if (data?.isVerified === false) {
            return{
                status: false,
                message: 'You do not have access for this page'
            }
        }

        const users = await User.find()

        if (!users)
            return {
                status: false,
                message: 'User not found.'

            }
        return {
            status: true,
            users
        }
    } catch (error) {
        return {
            status: false,
            message: "Something went wrong!."
        }
    }
}


// ADD PRIVATE PHOTO ACTION 
export async function PrivatePhotoAction(id, privatePhoto) {
    try {
        await connectDB();

        await User.findOneAndUpdate(
            { _id: id },
            { $push: { privatePhoto: privatePhoto } }
        );

        return {
            status: true,
            message: "Private Photo added successfully.",
        };
    } catch (error) {
        console.error(error);

        return {
            status: false,
            message: "Something went wrong!",
        };
    }
}
// DELETE USER ACTION 


export async function DeleteUserAction(id) {
    try {
        await connectDB();

        const user = await User.findById(id);

        if (!user) {
            return {
                status: false,
                message: "User not found.",
            };
        }

        if (user.photo?.publicId) {
            await deleteFromCloudinary(user.photo.publicId);
        }

        await User.findOneAndDelete({ _id: id });

        revalidatePath("/users");

        return {
            status: true,
            message: "user deleted successfully.",
        };
    } catch (error) {
        return {
            status: false,
            message: "Something went wrong!.",
        };
    }
}
