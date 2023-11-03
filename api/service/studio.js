import { bioskopID } from "../parser/bioskop.js"
import { studioEntityParser, studioFilter, studioID, updateStudioParser } from "../parser/studio.js"
import { deleteStudioRepo, getAllStudioRepo, getStudioRepo, insertStudioRepo, updateStudioRepo } from "../repository/studio.js"
import { failedAddResponse, failedGetResponse, successAddResponse, successGetResponse } from "../util/response.js"

export const insertStudio = async (req, res) => {
    const studio = studioEntityParser(req)

    const bioskopId = bioskopID(req)

    const success = await insertStudioRepo(bioskopId, studio)

    if (!success) return failedAddResponse(res)

    return successAddResponse(res)
}

export const getAllStudio = async (req, res) => {
    const filter = studioFilter(req)

    const studio = await getAllStudioRepo(filter)

    if (!studio) return failedGetResponse(res)

    return successGetResponse(studio, res)
}

export const getStudio = async (req, res) => {
    const id = studioID(req)

    const studio = await getStudioRepo(id)

    if (!studio) return failedGetResponse(res)

    return successGetResponse(studio, res)
}

export const updateStudio = async (req, res) => {
    const studio = updateStudioParser(req)

    const id = studioID(req)

    const success = await updateStudioRepo(id, studio)

    if (!success) return failedAddResponse(res)

    return successAddResponse(res)
}

export const deleteStudio = async (req, res) => {
    const id = studioID(req)

    const success = await deleteStudioRepo(id)

    if (!success) return failedAddResponse(res)

    return successAddResponse(res)
}

