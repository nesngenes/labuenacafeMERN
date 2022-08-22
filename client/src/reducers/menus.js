import {CREATE, FETCH_ALL, UPDATE, DELETE, FETCH_BY_VARIANT, START_LOADING, END_LOADING} from '../constants/actionTypes';

export default (state = {isLoading: true, menus: []}, action) => {
    switch (action.type) {
        case START_LOADING: 
            return {...state, isLoading: true} 
        case END_LOADING: 
            return {...state, isLoading: false}
        case CREATE:
            return {...state, menus: [...state.menus, action.payload]};
        case FETCH_ALL: 
            return {
              ...state,
              menus: action.payload  
            } 
        case UPDATE:
            return {...state, menus: state.menus.map((menu) => menu._id === action.payload._id ? action.payload : menu)};
        case DELETE: 
            return {...state, menus: state.menus.filter((menu) => menu._id !== action.payload)};
        case FETCH_BY_VARIANT:
            return {...state, menus: action.payload}
        default:
            return state;
    }
}