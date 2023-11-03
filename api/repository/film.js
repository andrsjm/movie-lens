import { Film } from "../entity/film.js"

export const insertFilmRepo = async (film) => {
    try{
        const success = await film.save()
        return success
    }catch(e){
        console.log(e)
        return null
    }
}

export const getFilmRepo = async (filter) => {
    try{
        const film = Film.findOne(filter)
        return film
    }catch(e){
        console.log(e)
        return null
    }
}

export const getAllFilmRepo = async (filter) => {
    try{
        const film = await Film.find().skip(filter.skip).limit(filter.limit)
        return film
    }catch(e){
        console.log(e)
        return null
    }
}

export const updateFilmRepo  = async (id, filter) => {
    try{
        const film = await Film.findByIdAndUpdate(id._id, {$set: filter}, {new:true})
        return film
    }catch(e){
        console.log(e)
        return null
    }
}

export const deleteFilmRepo  = async (id) => {
    try{
        const success = await Film.deleteOne(id)
        return success
    }catch(e){
        console.log(e)
        return false
    }
}