import { User } from "../entity/user.js"

export const getUser = async (userReq) => {
    const user = await User.findOne({ email: userReq.email })
    return user
};