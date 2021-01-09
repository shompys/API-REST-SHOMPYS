import express from 'express';
import cors from 'cors';
import routes from './routes/index.routes';
// import info from '../package.json';
const app = express();

// app.set('info', info);
app.set('port', process.env.PORT || 4001);

//middlewares
app.use(express.json());//le decimos que entienda los objetos json
app.use(cors()); //establece las reglas por nosotros para permitir comunicarse entre servidores.

//version one
app.use('/', routes);



export default app;