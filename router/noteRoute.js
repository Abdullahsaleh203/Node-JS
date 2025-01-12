import express from 'express';

import { getNotes, createNote, getNote, deleteNote, updateNote } from '../controller/noteController.js';

const router = express.Router();

router.get('/', getNotes);
router.post('/create', createNote);
router.get('/note', getNote);
router.delete('/delete', deleteNote);
router.put('/update', updateNote);

export default router;
