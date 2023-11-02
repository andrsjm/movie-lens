import mongoose from "mongoose";

export const ticketSchema = mongoose.Schema(
    {
        showTime: {
            type: Date,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        numberOfTicket: {
            type: String,
            required: true,
        },
        orderDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },        
    }
)

export const Ticket = mongoose.model('Ticket', ticketSchema);