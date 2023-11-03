import express from "express"
import { deleteUser, getAllUser, getUser, updateUser } from "../service/user.js"
import { isAdmin, isUser } from "../util/middleware.js"

const router = express.Router()

router.get("/", isAdmin , getAllUser)

router.get("/:id", isAdmin, isUser, getUser)

router.put("/:id", isAdmin, isUser, updateUser)

router.delete("/:id", isAdmin, isUser, deleteUser)

export default router