import express from "express"
import { isAdmin } from "../util/middleware.js"
import { deleteFilm, getAllFilm, getFilm, insertFilm, updateFilm } from "../service/film.js"

const router = express.Router()

router.post("/", isAdmin, insertFilm)

router.get("/", isAdmin, getAllFilm)

router.get("/:id", isAdmin, getFilm)

router.put("/:id", isAdmin, updateFilm)

router.delete("/:id", isAdmin, deleteFilm)

export default router