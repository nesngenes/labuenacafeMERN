import axios from 'axios';

const API = axios.create({baseURL: "/labuenacafe/"});
  
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

// MENUS
export const fetchMenus = () => API.get(`menus`);
export const createMenu = (newMenu) => API.post(`menus/add-menu`,newMenu);
export const updateMenu = (id, updateMenu) => API.patch(`menus/${id}`, updateMenu);
export const deleteMenu = (id) => API.delete(`menus/${id}`);
export const fetchMenusByVariant = (variant) => API.get(`menus/variant?variant=${variant}`, variant);

// USERS
export const signIn = (formData) => API.post(`user/signin`, formData)
export const signUp = (formData) => API.post(`user/signup`, formData)

// CAFES

export const fetchCafes = () => API.get(`cafes`);
export const createCafe = (newCafe) => API.post(`cafes/add-cafe`, newCafe);
export const updateCafe = (id, updateCafe) => API.patch(`cafes/${id}`, updateCafe);
export const deleteCafe = (id) => API.delete(`cafes/${id}`);
