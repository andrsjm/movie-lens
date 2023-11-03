import { User } from "../entity/user.js"

export const getUserRepo = async (filter) => {
    try{
        const user = await User.findOne(filter)
        return user
    }catch(e){
        console.log(e)
        return null
    }
};

export const getAllUserRepo = async (filter) => {
    try{
        const user = await User.find().skip(filter.skip).limit(filter.limit)
        return user
    }catch(e){
        console.log(e)
        return null
    }
}

export const updateUserRepo  = async (id, filter) => {
    try{
        const user = await User.findByIdAndUpdate(id._id, {$set: filter}, {new:true})
        return user
    }catch(e){
        console.log(e)
        return null
    }
}

export const deleteUserRepo  = async (id) => {
    try{
        const success = await User.deleteOne(id)
        return success
    }catch(e){
        console.log(e)
        return false
    }
}