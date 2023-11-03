import mongoose from "mongoose";

export const filmSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Date,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        director: {
            type: String,
            required: true,
        },
        cast: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            required: true,
        },
        trailer: {
            type: String,
            required: false,
            default:"",
        },
        pictures: {
            type: [Buffer],
            required:false,
        },
        status: {
            type: Boolean,
            default: true,
        },   
    }
)

export const Film = mongoose.model('Film', filmSchema);