import userParser from "../parser/user.js"
import {registerRepo} from "../repository/auth.js"
import { getUser } from "../repository/user.js"
import { failedAddResponse, failedLoginResponse, successAddResponse, successLoginResponse } from "../util/response.js"
import { getJWTKey } from "../util/util.js"

export const register = async (req, res) => {
    const user = await userParser(req)

    const success = await registerRepo(user)

    if (! success) return failedAddResponse(res)
    
    successAddResponse(res) 
}

export const login = async (req, res) => {
    const userReq = await userParser(req)

    const user = await getUser(userReq)

    const data = {id:user._id, isAdmin:user.isAdmin}

    const token = getJWTKey(data)

    if (! user) return failedLoginResponse(res)
    
    successLoginResponse(res, token) 
}