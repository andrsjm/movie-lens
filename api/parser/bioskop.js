import { Bioskop } from "../entity/bioskop.js"
import { removeEmptyProperties } from "../util/util.js"

export const bioskopEntityParser = (req) => {
    const bioskop = new Bioskop(req.body)

    return bioskop
}

export const bioskopFilter = (req) => {
    const filter = {limit:parseInt(req.query.limit), skip:parseInt(req.query.skip) - 1}
    
    return filter
}

export const updateBioskopParser = (req) => {
    const bioskop = removeEmptyProperties(req.body)

    return bioskop
}

export const bioskopID = (req) => {
    const filter = {_id: req.params.id}

    return filter
}
