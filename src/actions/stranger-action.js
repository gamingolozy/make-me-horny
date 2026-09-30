'use server'
import { uploadOnCloudinary } from "@/lib/cloudinary"
import connectDB from "@/lib/db"
import { deleteFromCloudinary } from "@/lib/deleteCloudinary"
import Stranger from "@/models/stranger-model"
import { revalidatePath } from "next/cache"
import { GetAuth } from "./auth-action"

export async function StrangerAction(formData) {
    try {
        const { photo, comment } = Object.fromEntries(formData)
        if (!photo || !comment) return {
            status: false,
            message: "photo and comment fields are required"
        }

        let result
        if (photo || photo.size > 0) {
            result = await uploadOnCloudinary('mystuff/stranger', photo)
            if (!result) return {
                status: false,
                message: 'photo upload failed.'
            }

        }
        // connect database
        await connectDB()

        const strangers = await Stranger.create({
            photo: {
                url: result.url,
                publicId: result.publicId
            },
            comment,

        })

        if (!strangers) return {
            status: false,
            message: "Stranger Not Created"
        }
        revalidatePath('/stranger')
        return {
            status: true,
            message: 'Stranger Created successfully.',

        }

    } catch (error) {

        console.log(error.message)
        return {
            status: false,
            message: error.message || 'Something went wrong!'
        }
    }

}



// GET STRANGER 

export async function GetStranger() {
    try {

        // connect database
        await connectDB()

        const data = await GetAuth()

        if (data?.isVerified === false) {
            return {
                status: false,
                message: 'You do not have access for this page'
            }
        }

        const strangers = await Stranger.find()

        if (!strangers) {
            return {
                status: false,
                message: 'Strangers not found'
            }
        }


        return {
            status: true,
            strangers
        }

    } catch (error) {

        console.log(error.message)
        return {
            status: false,
            message: error.message || 'Something went wrong!'
        }
    }

}
// DELETE STRANGER 

export async function DeleteStranger(id) {
    try {
        // Connect database
        await connectDB();

        // Find stranger
        const stranger = await Stranger.findById(id);

        if (!stranger) {
            return {
                status: false,
                message: "Stranger not found",
            };
        }

        // Delete image from Cloudinary
        if (stranger.photo?.publicId) {
            await deleteFromCloudinary(stranger.photo.publicId);
        }

        // Delete stranger from database
        await Stranger.findByIdAndDelete(id);

        revalidatePath('/stranger')

        return {
            status: true,
            message: "Stranger deleted",
        };

    } catch (error) {
        console.log(error.message);

        return {
            status: false,
            message: error.message || "Something went wrong!",
        };
    }
}