import mongoose from "mongoose";

const StrangerSchema = new mongoose.Schema({
    photo: {

        url: {
            type: String,
        },
        publicId: {
            type: String,
        },

    },

    comment: {
        type: String,

        trim: true

    },
},
    {
        timestamps: true
    })

const Stranger =
    mongoose.models.Stranger || mongoose.model("Stranger", StrangerSchema);

export default Stranger;