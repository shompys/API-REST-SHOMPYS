import {Router} from 'express';
const router = Router();

import * as authControllers from './auth.controllers';



router.post('/', authControllers.createClient);
//router.put('/:id', authControllers.updateClient);

export default router;