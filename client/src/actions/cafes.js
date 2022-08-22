import {ADD, GET_ALL, EDIT, REMOVE, START_LOADING, END_LOADING} from '../constants/actionTypes'

import * as api from '../api'

export const getCafes = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {data} = await api.fetchCafes();
        dispatch({type: GET_ALL, payload: data});
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }
}

export const addCafe = (cafe) => async (dispatch) => {
    try {
        const {data} = await api.createCafe(cafe);
        dispatch({type: ADD, payload: data});
    } catch (error) {
        console.log(error);
    }
}


export const updateCafe = (id, cafe) => async (dispatch) => {
    try {
        const {data} = await api.updateCafe(id, cafe);

        dispatch({type: EDIT, payload: data});
    } catch (error) {
        console.log(error)
    }
}


export const deleteCafe = (id) => async (dispatch) => {
    try {
        await api.deleteCafe(id);

        dispatch({type: REMOVE, payload: id})
    } catch (error) {
        console.log(error)
    }
}