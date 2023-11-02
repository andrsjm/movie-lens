import { User } from "../entity/user.js"
import { getHashedPassword } from "../util/util.js"


const userParser = async (req) => {
    const password = await getHashedPassword(req.body.password)

    req.body.password = password

    const user =  new User(req.body)

    return user
}


export default userParser