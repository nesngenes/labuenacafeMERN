import { combineReducers } from 'redux';

import menus from './menus';
import auth from './auth';
import cafes from './cafes';

export const reducers = combineReducers({ menus, auth, cafes });