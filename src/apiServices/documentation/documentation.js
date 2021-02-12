import info from '../../../package.json';
import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    
    res.send(`<h1>API REST SHOMPYS </h1>
    <li>/authorize -H client_secret : <b>key privated</b>(post)</li>
    <li>/api/users -H authorization: <b>token</b>(get, get/id, post, put, delete)</li>
    <li>/api/games -H authorization: <b>token</b>(get, get/id -> puede ser id o name</li>
    <li>/api/clips -H authorization: <b>token</b>(get) </li>`)
    
})
export default router;