'use server'
import connectDB from "@/lib/db"
import LinkData from "@/models/linkdata-model"

export default async function FormAction(previousState, formData) {
    try {
        const { title, url, type, source } = Object.fromEntries(formData)
        if (!title || !url) return {
            status: false,
            message: "title and url fields are required"
        }
        // connect database
        await connectDB()

        const links = await LinkData.create({
            title,
            url,
            type,
            source
        })

        if (!links) return {
            status: false,
            message: "LinkData Not Created"
        }

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




