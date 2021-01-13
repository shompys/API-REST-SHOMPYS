import {Router} from 'express';
const router = Router();
import routerClient from '../auth/auth.routes';
import routerUser from '../apiServices/users/users.routes';
import routerGames from '../apiServices/games/games.routes';
import routerDocumentation from '../apiServices/documentation/documentation';

router.use('/authorize', routerClient);
router.use('/api/users', routerUser);
router.use('/api/games', routerGames);
router.use('/', routerDocumentation);
export default router;