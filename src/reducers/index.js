import { types } from "../types/Types"

export const linkReducer = (state, action) => {
    switch(action.type){
        case types.CREATE_LINK:
            
            return [...state, action.payload]
        case types.DELETE_LINK:
            return state.filter((el) => {
                return el.id !== action.payload.id
            })
        default:
            return state;
    }
}