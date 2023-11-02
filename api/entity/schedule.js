import mongoose from "mongoose";
import { filmSchema } from "./film.js";
import { studioSchema } from "./studio.js";

const scheduleSchema = mongoose.Schema(
    {
        film: {
            type: filmSchema,
            required: true,
        },
        studio: {
            type: studioSchema,
            required: true,
        },
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },   
    }
)

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;