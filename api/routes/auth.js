import express from "express";
import { login, register } from "../service/auth.js";
import { isAdmin } from "../util/middleware.js";

const router = express.Router()

router.post("/register", register)

router.post("/login", login)

export default router