import {Router} from 'express';
const router = Router();

import * as usersControllers from './users.controllers';
import {verifyToken} from '../../middlewares/index';

router.post('/', usersControllers.createUser);

router.get('/', usersControllers.getUsers);

router.get('/:id', usersControllers.getUserById);

router.put('/:id', usersControllers.updateUserById);

router.delete('/:id', usersControllers.deleteUserById);



export default router;