// Initial State
const initialState = {
    loggedIn: false,
    user: null
}

//Action Consts
const UPDATE_USER = 'UPDATE_USER'

//ACtion Builders
export const updateUser = (userObj) => {
    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

//Reducer Function
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_USER:
            return {...state, user: action.payload}
            default: return state
    }
}

export default reducer