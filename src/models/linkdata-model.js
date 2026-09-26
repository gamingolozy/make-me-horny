import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        url: {
            type: String,
            required: true,
            trim: true,
        },

    },
    {
        timestamps: true,
    }
);

const LinkData =
    mongoose.models.LinkData || mongoose.model("LinkData", LinkSchema);

export default LinkData;