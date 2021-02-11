import {Router} from 'express';
const router = Router();
import {verifyToken} from '../middlewares/index';
import routerClient from '../auth/auth.routes';
import routerUser from '../apiServices/users/users.routes';
import routerGames from '../apiServices/games/games.routes';
import routerClips from '../apiServices/clips/clips.routes';
import routerDocumentation from '../apiServices/documentation/documentation';


router.use('/authorize', routerClient);
router.use('/api/users', verifyToken, routerUser);
router.use('/api/games', verifyToken,routerGames);
router.use('/api/clips', verifyToken,routerClips);
router.use('/', routerDocumentation);

export default router;