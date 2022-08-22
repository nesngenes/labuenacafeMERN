import {ADD, GET_ALL, EDIT, REMOVE, START_LOADING, END_LOADING} from '../constants/actionTypes'

export default (state = {isLoading: true, cafes: []}, action) => {
    switch (action.type) {
        case START_LOADING: 
            return {...state, isLoading: true} 
        case END_LOADING: 
            return {...state, isLoading: false}
        case ADD: 
            return {...state, cafes: [...state.cafes, action.payload]}
        case GET_ALL:
            return {
                ...state,
                cafes: action.payload
            }
        case EDIT:
            return {
                ...state, cafes: state.cafes.map((cafe) => cafe._id === action.payload._id ? action.payload : cafe)
            }
        case REMOVE: 
            return {
                ...state, 
                cafes: state.cafes.filter((cafe) => cafe._id !== action.payload)
            }
        default: 
            return state;
    }
}
