import { v2 as cloudinary } from "cloudinary";

export const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);

        return result;
    } catch (error) {
        console.log("Cloudinary delete error:", error);
        return null;
    }
};