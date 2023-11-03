import { Bioskop } from "../entity/bioskop.js"
import { Studio } from "../entity/studio.js"

export const insertStudioRepo = async (bioskopId, studio) => {
    try{
        const savedStudio = await studio.save()
        try{
            const success = Bioskop.findByIdAndUpdate(bioskopId, {$push: {studios: savedStudio}})
            return success
        }catch(e){
            console.log(e)
            return null
        }
    }catch(e){
        console.log(e)
        return null
    }
}

export const getStudioRepo = async (filter) => {
    try{
        const studio = Studio.findOne(filter)
        return studio
    }catch(e){
        console.log(e)
        return null
    }
}

export const getAllStudioRepo = async (filter) => {
    try{
        const studio = await Studio.find().skip(filter.skip).limit(filter.limit)
        return studio
    }catch(e){
        console.log(e)
        return null
    }
}

export const updateStudioRepo  = async (id, filter) => {
    try{
        const studio = await Studio.findByIdAndUpdate(id._id, {$set: filter}, {new:true})
        return studio
    }catch(e){
        console.log(e)
        return null
    }
}

export const deleteStudioRepo  = async (id) => {
    try{
        const success = await Studio.deleteOne(id)
        return success
    }catch(e){
        console.log(e)
        return false
    }
}