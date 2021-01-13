import {Router} from 'express';
const router = Router();

import * as controllersGames from './games.controllers';

router.get('/', controllersGames.listGames);

router.get('/:id', controllersGames.game);

export default router;