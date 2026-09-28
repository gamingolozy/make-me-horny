import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,

        trim: true

    },
    photo: {

        url: {
            type: String,
        },
        publicId: {
            type: String,
        },

    },
    overview: {
        type: String,


    },
    contact: {
        type: String,


    },
    comment: {
        type: String,

    },

    privatePhoto: [
        {
            type: String
        }
    ]
},
    {
        timestamps: true
    })

const User =
    mongoose.models.User || mongoose.model("User", UserSchema);

export default User;