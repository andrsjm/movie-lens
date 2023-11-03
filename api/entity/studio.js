import mongoose from "mongoose";

export const studioSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        numberOfChairs: {
            type: Number,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
    }
)

export const Studio = mongoose.model('Studio', studioSchema);