import express from 'express'

import {getMenus, createMenu, updateMenu, deleteMenu, getMenusByVariant} from '../controllers/menus.js';

import admin from '../middleware/admin.js'

const router = express.Router();

router.get('/', getMenus);
router.post('/add-menu', admin, createMenu);
router.patch('/:id', admin, updateMenu);
router.delete('/:id', admin, deleteMenu);
router.get('/variant', getMenusByVariant);

export default router;