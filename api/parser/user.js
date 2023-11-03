import { User } from "../entity/user.js"
import { getHashedPassword, removeEmptyProperties } from "../util/util.js"


export const userEntityParser = async (req) => {
    const password = await getHashedPassword(req.body.password)

    req.body.password = password

    const user =  new User(req.body)

    return user
}

export const loginParser =  async (req) => {
    const filter = {email:req.body.email, password:req.body.password}

    return filter
}

export const updateUserParser = (req) => {
    const user = removeEmptyProperties(req.body)

    return user
}

export const userFilter = (req) => {
    const filter = {limit:parseInt(req.query.limit), skip:parseInt(req.query.skip) - 1, _id: req.user.id}
    
    return filter
}

export const userID = (req) => {
    const filter = {_id: req.params.id}

    return filter
}


