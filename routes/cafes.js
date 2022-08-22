import express from 'express'

import {getCafes, createCafe, updateCafe, deleteCafe} from '../controllers/cafes.js';
import admin from '../middleware/admin.js'

const router = express.Router();

router.get('/', getCafes);
router.post('/add-cafe', admin, createCafe);
router.patch('/:id', admin, updateCafe);
router.delete('/:id', admin, deleteCafe);

export default router;