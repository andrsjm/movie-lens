import { bioskopEntityParser, bioskopFilter, bioskopID, updateBioskopParser } from "../parser/bioskop.js"
import { filmID } from "../parser/film.js"
import { deleteBioskopRepo, getAllBioskopRepo, getBioskopRepo, insertBioskopRepo, updateBioskopRepo } from "../repository/bioskop.js"
import { failedAddResponse, failedGetResponse, successAddResponse, successGetResponse } from "../util/response.js"

export const insertBioskop = async (req, res) => {
    const bioskop = bioskopEntityParser(req)

    const success = await insertBioskopRepo(bioskop)

    if (!success) return failedAddResponse(res)

    return successAddResponse(res)
}

export const getAllBioskop = async (req, res) => {
    const filter = bioskopFilter(req)

    const bioskop = await getAllBioskopRepo(filter)

    if(!bioskop) return failedGetResponse(res)

    return successGetResponse(bioskop, res)
}

export const getBioskop = async (req, res) => {
    const id = bioskopID(req)

    const bioskop = await getBioskopRepo(id)

    if (!bioskop) return failedGetResponse(res)

    return successGetResponse(bioskop, res)
}

export const updateBioskop = async (req, res) => {
    const bioskop = updateBioskopParser(req)

    const id = bioskopID(req)

    const success = await updateBioskopRepo(id, bioskop)

    if(!success) return failedAddResponse(res)

    return successAddResponse(res)
}

export const deleteBioskop = async (req, res) => {
    const id = bioskopID(req)

    const success = await deleteBioskopRepo(id)

    if (!success) return failedAddResponse(res)

    return successAddResponse(res)
}