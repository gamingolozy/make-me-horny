'use server'
import connectDB from "@/lib/db"
import Dick from "@/models/dick-model"
import { revalidatePath } from "next/cache"
import { GetAuth } from "./auth-action"

export async function DickAction(formData) {
    try {
        const { url } = Object.fromEntries(formData)
        if (!url) return {
            status: false,
            message: "url required"
        }



        await connectDB()

        const dicks = await Dick.create({
            url

        })

        if (!dicks) return {
            status: false,
            message: "Dick Not Created"
        }
        revalidatePath('/masturbate')
        return {
            status: true,
            message: 'Dick Created successfully.',

        }

    } catch (error) {

        console.log(error.message)
        return {
            status: false,
            message: error.message || 'Something went wrong!'
        }
    }

}

// GET DICKS 
export async function GetDick(formData) {
    try {



        await connectDB()

        const data = await GetAuth()

        if (data?.isVerified === false) {
            return {
                status: false,
                message: 'You do not have access for this page'
            }
        }

        const dicks = await Dick.find()


        return {
            status: true,
            dicks

        }

    } catch (error) {

        console.log(error.message)
        return {
            status: false,
            message: error.message || 'Something went wrong!'
        }
    }

}


export async function DeleteDick(id) {
    try {
        // Connect database
        await connectDB();



        // Delete stranger from database
        await Dick.findByIdAndDelete(id);

        revalidatePath('/masturbate')

        return {
            status: true,
            message: "Dick deleted",
        };

    } catch (error) {
        console.log(error.message);

        return {
            status: false,
            message: error.message || "Something went wrong!",
        };
    }
}
