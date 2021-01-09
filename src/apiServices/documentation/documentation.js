import info from '../../../package.json';
import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    
    res.send(`<h1>API REST SHOMPYS </h1>
    <li>/authorize -post {client_id, client_secret}</li>
    <li>/api/users</li>`)
    
})
export default router;