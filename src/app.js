import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import routes from './routes/index.routes';
import {createRoles} from './libs/initialSetup';
import apiTwitch from './api/twitch/twitch.token';

// import info from '../package.json';
const app = express();
//creacion de roles imaginarios en dev:
createRoles();
// app.set('info', info);
app.set('port', process.env.PORT || 4001);

//middlewares
app.use(express.json());//le decimos que entienda los objetos json
app.use(express.urlencoded({extended: false}))// recibe un formulario y lo transforma en un objeto 
app.use(cors()); //establece las reglas por nosotros para permitir comunicarse entre servidores.

//apis externals
apiTwitch()
//version one
app.use('/', routes);


export default app;