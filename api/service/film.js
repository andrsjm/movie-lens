import { filmEntityParser, filmFilter, filmID, updateFilmParser } from "../parser/film.js"
import { deleteFilmRepo, getAllFilmRepo, getFilmRepo, insertFilmRepo, updateFilmRepo } from "../repository/film.js"
import { failedAddResponse, failedGetResponse, successAddResponse, successGetResponse } from "../util/response.js"

export const insertFilm = async (req, res) => {
    const film = filmEntityParser(req)

    const success = await insertFilmRepo(film)

    if (!success) return failedAddResponse(res)
    
    return successAddResponse(res)
}

export const getAllFilm = async (req, res) => {
    const filter = filmFilter(req)

    const film = await getAllFilmRepo(filter)

    if (!film) return failedGetResponse(res)
    
    return successGetResponse(film, res)
}

export const getFilm = async (req, res) => {
    const id = filmID(req)

    const film = await getFilmRepo(id)

    if (!film) return failedGetResponse(res)
    
    return successGetResponse(film, res)
}

export const updateFilm = async (req, res) => {
    const film = updateFilmParser(req)

    const id = filmID(req)

    const success = await updateFilmRepo(id, film)

    if (!success) return failedAddResponse(res)
    
    return successAddResponse(res)
}

export const deleteFilm = async (req, res) => {
    const id = filmID(req)

    const success = await deleteFilmRepo(id)

    if (!success) return failedAddResponse(res)
    
    return successAddResponse(res)
}