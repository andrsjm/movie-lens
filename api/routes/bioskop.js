import express from "express"
import { isAdmin } from "../util/middleware.js"
import { deleteBioskop, getAllBioskop, getBioskop, insertBioskop, updateBioskop } from "../service/bioskop.js"

const router = express.Router()

router.post("/", isAdmin, insertBioskop)

router.get("/", getAllBioskop)

router.get("/:id", getBioskop)

router.put("/:id", isAdmin, updateBioskop)

router.delete("/:id", isAdmin, deleteBioskop)

export default router