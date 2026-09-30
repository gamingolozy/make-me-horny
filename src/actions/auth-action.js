"use server";

import connectDB from "@/lib/db";
import Auth from "@/models/auth-model";
import { revalidatePath } from "next/cache";


// LOGIN
export async function LoginAction(formData) {
    try {
        await connectDB();

        const password = formData.get("password");

        if (!password) {
            return {
                status: false,
                message: "Password is required",
            };
        }

        const auth = await Auth.findOne();

        if (!auth) {
            return {
                status: false,
                message: "Auth record not found",
            };
        }

        // Password comparison
        if (password !== auth.password) {
            return {
                status: false,
                message: "Wrong password",
            };
        }

        // Login
        auth.isVerified = true;
        await auth.save();

        revalidatePath('/auth')
        return {
            status: true,
            isVerified: true,
            message: "Login successful.",
        };
    } catch (error) {
        console.error(error);

        return {
            status: false,
            message: "Something went wrong!",
        };
    }
}


// LOGOUT
export async function LogoutAction() {
    try {
        await connectDB();

        const auth = await Auth.findOne();

        if (!auth) {
            return {
                status: false,
                message: "Auth record not found",
            };
        }

        auth.isVerified = false;
        await auth.save();

        revalidatePath('/auth')

        return {
            status: true,
            isVerified: false,
            message: "Logout successful.",
        };
    } catch (error) {
        console.error(error);

        return {
            status: false,
            message: "Something went wrong!",
        };
    }
}


// GET AUTH
export async function GetAuth() {
    try {
        await connectDB();

        const auth = await Auth.findOne();

        if (!auth) {
            return {
                status: false,
                isVerified: false,
                message: "Auth record not found",
            };
        }
        console.log("🔥🔥 GET AUTH RUNNING", {
            id: auth?._id?.toString(),
            isVerified: auth?.isVerified,
        });
        return {
            status: true,
            isVerified: auth.isVerified,
        };
    } catch (error) {
        console.error(error);

        return {
            status: false,
            isVerified: false,
            message: "Something went wrong!",
        };
    }
}