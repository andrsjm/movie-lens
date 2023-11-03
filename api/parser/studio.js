import { Studio } from "../entity/studio.js"
import { removeEmptyProperties } from "../util/util.js"

export const studioEntityParser = (req) => {
    const studio = new Studio(req.body)

    return studio
}

export const studioFilter = (req) => {
    const filter = {limit:parseInt(req.query.limit), skip:parseInt(req.query.skip) - 1}
    
    return filter
}

export const updateStudioParser = (req) => {
    const studio = removeEmptyProperties(req.body)

    return studio
}

export const studioID = (req) => {
    const filter = {_id: req.params.id}

    return filter
}
