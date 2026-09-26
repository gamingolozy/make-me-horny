import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
      
    },
    password: {
        type: String,
        required: true,

    },
    platform: {
        type: String,
        default: "unknown"

    }
},
    {
        timestamps: true
    })

const Password =
    mongoose.models.Password || mongoose.model("Password", PasswordSchema);

export default Password;