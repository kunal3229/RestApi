import express from "express";

import { getUsers, createUser, getUser, deleteUser, updateUser} from  '../controllers/users.js';

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getUsers);

// post request is used to create an new user from frontend
router.post('/', createUser);

// route to find an user with specified id
router.get('/:id', getUser);

// route to delete an user with specified id
router.delete('/:id', deleteUser);

// route to update details of specific id
router.patch('/:id', updateUser);

export default router;