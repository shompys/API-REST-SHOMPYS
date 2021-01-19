import {Router} from 'express';
const router = Router();

import * as controllersClips from './clips.controllers';

router.get('/', controllersClips.listClips);

export default router;