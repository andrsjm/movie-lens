import { Bioskop } from "../entity/bioskop.js"

export const insertBioskopRepo = async (bioskop) => {
    try{
        const success = await bioskop.save()
        return success
    }catch(e){
        console.log(e)
        return null
    }
}

export const getBioskopRepo = async (filter) => {
    try{
        const bioskop = Bioskop.findOne(filter)
        return bioskop
    }catch(e){
        console.log(e)
        return null
    }
}

export const getAllBioskopRepo = async (filter) => {
    try{
        const bioskop = await Bioskop.find().skip(filter.skip).limit(filter.limit)
        return bioskop
    }catch(e){
        console.log(e)
        return null
    }
}

export const updateBioskopRepo  = async (id, filter) => {
    try{
        const bioskop = await Bioskop.findByIdAndUpdate(id._id, {$set: filter}, {new:true})
        return bioskop
    }catch(e){
        console.log(e)
        return null
    }
}

export const deleteBioskopRepo  = async (id) => {
    try{
        const success = await Bioskop.deleteOne(id)
        return success
    }catch(e){
        console.log(e)
        return false
    }
}