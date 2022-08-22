import {CREATE, FETCH_ALL, UPDATE, DELETE, FETCH_BY_VARIANT, START_LOADING, END_LOADING} from '../constants/actionTypes';

import * as api from '../api'

// actions creators

export const getMenus = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {data} = await api.fetchMenus();
    dispatch({type: FETCH_ALL, payload: data});
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
}

export const getMenusByVariant = (variant) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {data} = await api.fetchMenusByVariant(variant);

    dispatch({type: FETCH_BY_VARIANT, payload: data})

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error)
  }
} 

export const createMenu = (menu) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {data} = await api.createMenu(menu);
    dispatch({type: CREATE, payload: data});
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error);
  }
}

export const updateMenu = (id, menu) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {data} = await api.updateMenu(id, menu);

    dispatch({type: UPDATE, payload: data});
    
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error)
  }
}

export const deleteMenu = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    await api.deleteMenu(id);

    dispatch({type: DELETE, payload: id})

    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error)
  }
} 



