import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({


    password: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

const Auth =
    mongoose.models.Auth || mongoose.model("Auth", AuthSchema);

export default Auth;