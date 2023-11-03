import mongoose from "mongoose";
import { ticketSchema } from "./ticket.js";


const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            required: false,
        },
        tickets:{
            type: [ticketSchema],
            required: false,
        },
        isAdmin:{
            type: Boolean,
            default: false,
        },
        status: {
            type: Boolean,
            default: true,
        },
        
    }
)

export const User = mongoose.model('User', userSchema);