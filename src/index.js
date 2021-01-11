import './database';
import app from './app';

const main = () => {
    
    const res = app.listen(app.set('port'))
    console.log(`Servidor corriendo en el puerto: ${app.set('port')}`)
}
main();