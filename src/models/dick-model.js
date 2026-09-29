import mongoose from "mongoose";

const DickSchema = new mongoose.Schema({


    url: {
        type: String,

        trim: true

    },
},
    {
        timestamps: true
    })

const Dick =
    mongoose.models.Dick || mongoose.model("Dick", DickSchema);

export default Dick;