'use server'
import { decryptPassword, encryptPassword } from "@/lib/cryptoJs"
import connectDB from "@/lib/db"
import LinkData from "@/models/linkdata-model"
import Password from "@/models/password-model"
import { revalidatePath } from "next/cache"

export async function FormAction(previousState, formData) {
    try {
        const { title, url } = Object.fromEntries(formData)
        if (!title || !url) return {
            status: false,
            message: "title and url fields are required"
        }
        // connect database
        await connectDB()

        const links = await LinkData.create({
            title,
            url,

        })

        if (!links) return {
            status: false,
            message: "LinkData Not Created"
        }
        revalidatePath('/link')
        return {
            status: true,
            message: 'LinkData Created successfully.',

        }

    } catch (error) {

        console.log(error.message)
        return {
            status: false,
            message: error.message || 'Something went wrong!'
        }
    }

}




export async function FormDeleteAction(id) {
    try {

        // connect database
        await connectDB()

        await LinkData.findByIdAndDelete(id)

        revalidatePath('/link')

        return {
            status: true,
            message: 'LinkData deleted successfully.',

        }

    } catch (error) {

        console.log(error.message)
        return {
            status: false,
            message: error.message || 'Something went wrong!'
        }
    }

}


// PASSWORD ADD ACTION 

export async function AddPasswordAction(formData) {
    try {
        const { username, password, platform } = Object.fromEntries(formData)
        if (!username || !password) return {
            status: false,
            message: "username and password fields are required"
        }

        // ENCRYPT PLAIN PASSWORD 
        const encryptedPassword = encryptPassword(password)

        // connect database
        await connectDB()

        // SAVE DATA IN DB 

        await Password.create({
            username,
            password: encryptedPassword,
            platform

        })

        revalidatePath('/passwords')

        return {
            status: true,
            message: 'Password saved successfully.'
        }
    } catch (error) {
        return {
            status: false,
            message: error.message || 'Something went wrong.'
        }
    }
}

// GET PASSWORD 

export async function GetPasswordAction() {
    try {
        await connectDB();

        // Database se saare records uthao
        const records = await Password.find({}).lean();

        // Loop chalakar har record ke password ko decrypt karo
        const decryptedList = records.map((item) => {

            // Utility function use karke decrypt karo
            const plainPassword = decryptPassword(item.password);

            return {
                id: item._id.toString(),
                platform: item.platform,
                username: item.username,
                password: plainPassword // Ab ye plain text ban gaya UI pe dikhane ke liye
            };
        });

        return { success: true, data: decryptedList };
    } catch (error) {
        console.error('Fetch error:', error);
        return { success: false, error: error.message };
    }
}


// DELETE PASSWORD ACTION 

export async function DeletePasswordAction(id) {
    try {
      


        // connect database
        await connectDB()

        // DELETE DATA FROM DB 

        await Password.findByIdAndDelete(id)

        revalidatePath('/passwords')

        return {
            status: true,
            message: 'Password deleted successfully.'
        }
    } catch (error) {
        return {
            status: false,
            message: error.message || 'Something went wrong.'
        }
    }
}








