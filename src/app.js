import express from 'express';
import cors from 'cors';
import info from '../package.json';

const app = express();

app.set('info', info);
app.set('port', process.env.PORT || 4001);

//middlewares
app.use(express.json());
app.use(cors()); //establece las reglas por nosotros para permitir comunicarse entre servidores.


app.use('/', (req, res) => {
    res.json({
        name: app.get('info').name,
        author: app.get('info').author,
        description: app.get('info').description,
        version: app.get('info').version
    })
})

export default app;