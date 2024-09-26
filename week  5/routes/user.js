import express from 'express';
import { createUser, getUser, deleteUser, updateUser, getUsers } from '../controllers/users.js';


const router = express.Router();

let users = [
]

router.get('/', getUsers);

router.post("/", createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;