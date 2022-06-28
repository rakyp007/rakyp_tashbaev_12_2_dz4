import { types } from "../../types"



const initialState ={
    users: []
}



export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_USERS:
        return {...state,  users: [...state,action.payload]}
        case types.CLEAR_USERS:
            return{...state, users: []}
    default:
        return state
  }
}
