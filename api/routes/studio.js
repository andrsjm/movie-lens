import express from "express"
import { deleteStudio, getAllStudio, getStudio, insertStudio, updateStudio } from "../service/studio.js"
import { isAdmin } from "../util/middleware.js"

const router = express.Router()

router.post("/:id", isAdmin, insertStudio)

router.get("/", getAllStudio)

router.get("/:id", getStudio)

router.put("/:id", isAdmin, updateStudio)

router.delete("/:id", isAdmin, deleteStudio)

export default router