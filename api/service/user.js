import { userFilter, userID, userEntityParser, updateUserParser } from "../parser/user.js"
import { deleteUserRepo, getAllUserRepo, getUserRepo, updateUserRepo } from "../repository/user.js"
import { failedAddResponse, failedGetResponse, successAddResponse, successGetResponse } from "../util/response.js"

export const getAllUser = async (req, res) => {
    const filter = userFilter(req)
    
    const user = await getAllUserRepo(filter)

    if (!user) return failedGetResponse(res)

    return successGetResponse(user, res)
}

export const getUser = async (req, res) => {
    const filter = userID(req)
    
    const user = await getUserRepo(filter)

    if (!user) return failedGetResponse(res)

    return successGetResponse(user, res)
}

export const updateUser = async (req, res) => {
    const filter = updateUserParser(req)

    const id = userID(req)
    
    const user = await updateUserRepo(id, filter)

    if (!user) return failedAddResponse(res)

    return successAddResponse(res)
}

export const deleteUser = async (req, res) => {
    const id = userID(req)
    
    const user = await deleteUserRepo(id)

    if (!user) return failedAddResponse(res)

    return successAddResponse(res)
}