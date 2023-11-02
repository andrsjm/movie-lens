import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('Success Connect to DB');
    } catch(e){
        handleError(e)
    }
}

mongoose.connection.on("connected", () => {
    console.log('Mongo DB Connected');
})

mongoose.connection.on("disconnected", () => {
    console.log('Mongo DB Disconnected');
})