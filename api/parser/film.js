import { Film } from "../entity/film.js"
import { removeEmptyProperties } from "../util/util.js"

export const filmEntityParser = (req) => {
    const film = new Film(req.body)

    return film
}

export const filmFilter = (req) => {
    const filter = {limit:parseInt(req.query.limit), skip:parseInt(req.query.skip) - 1}
    
    return filter
}

export const updateFilmParser = (req) => {
    const film = removeEmptyProperties(req.body)

    return film
}

export const filmID = (req) => {
    const filter = {_id: req.params.id}

    return filter
}
