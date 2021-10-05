import { types } from "../types/Types"

export  const createLinkActionCreate = (id, link) => {
    return {
        type: types.CREATE_LINK,
        payload: {
            id,
            link
        }
    }
}
