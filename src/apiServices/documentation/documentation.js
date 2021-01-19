import info from '../../../package.json';
import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    
    res.send(`<h1>API REST SHOMPYS </h1>
    <li>/authorize -post {client_id, client_secret}</li>
    <li>/api/users (get, get/id, post, put, delete)</li>
    <li>/api/games (get, get/id -> puede ser id o name</li>
    <li>/api/clips (get </li>`)
    
})
export default router;