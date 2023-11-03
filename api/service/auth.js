import { loginParser, userEntityParser } from "../parser/user.js"
import {registerRepo} from "../repository/auth.js"
import { getUserRepo } from "../repository/user.js"
import { failedAddResponse, failedLoginResponse, successAddResponse, successLoginResponse } from "../util/response.js"
import { comparedPassword, getJWTKey } from "../util/util.js"

export const register = async (req, res) => {
    const user = await userEntityParser(req)

    const success = await registerRepo(user)

    if (! success) return failedAddResponse(res)
    
    return successAddResponse(res) 
}

export const login = async (req, res) => {
    const userFilter = await loginParser(req)
    const filter = {email:userFilter.email}
    const user = await getUserRepo(filter)

    if (! user) return failedLoginResponse(res)

    if(!await comparedPassword(userFilter.password, user.password)) return failedLoginResponse(res)

    const data = {id:user._id, isAdmin:user.isAdmin}
    const token = getJWTKey(data)
    
    return successLoginResponse(res, token) 
}