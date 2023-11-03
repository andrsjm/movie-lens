import mongoose from "mongoose";
import { studioSchema } from "./studio.js";

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
            type: [studioSchema],
            required: false,
        },
        status: {
            type: Boolean,
            default: true,
        },
        
    }
)

export const Bioskop = mongoose.model('Bioskop', bioskopSchema);