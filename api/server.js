import Express from "express";
import "dotenv/config"
import { connectDB } from "./util/db.js";
import authRoutes from "./routes/auth.js"
import  BodyParser  from "body-parser";
import cookieParser from "cookie-parser";



const app = Express()

app.use(cookieParser())
app.use(Express.json())
app.use(Express.urlencoded({extended : true}))
app.use(BodyParser.urlencoded({extended: true}))

app.use("/auth", authRoutes)

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Running on port ${process.env.PORT}`);
});

