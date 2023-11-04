import Express from "express";
import "dotenv/config"
import { connectDB } from "./util/db.js";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import filmRoutes from "./routes/film.js"
import  BodyParser  from "body-parser";
import bioskopRoutes from "./routes/bioskop.js"
import studioRoutes from "./routes/studio.js"
import cookieParser from "cookie-parser";

const app = Express()

app.use(cookieParser())
app.use(Express.json())
app.use(Express.urlencoded({extended : true}))
app.use(BodyParser.urlencoded({extended: true}))

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/film", filmRoutes)
app.use("/bioskop", bioskopRoutes)
app.use("/studio", studioRoutes)

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Running on port ${process.env.PORT}`);
});

