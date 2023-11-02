import mongoose from "mongoose";
import Studio from "./studio.js";

const bioskopSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        studios: {
            type: [Studio],
            required: false,
        },
        status: {
            type: Boolean,
            default: true,
        },
        
    }
)

export const Bioskop = mongoose.model('Bioskop', bioskopSchema);