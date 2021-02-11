import info from '../../../package.json';
import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    
    res.send(`<h1>API REST SHOMPYS </h1>
    <li>/authorize -H client_secret : <KEY privated>(post)</li>
    <li>/api/users -H authorization: <token>(get, get/id, post, put, delete)</li>
    <li>/api/games -H authorization: <token>(get, get/id -> puede ser id o name</li>
    <li>/api/clips -H authorization: <token>(get) </li>`)
    
})
export default router;