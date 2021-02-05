import './database';
import app from './app';

const main = () => {
    
    const res = app.listen(app.get('port'))
    console.log(`Servidor corriendo en el puerto: ${app.set('port')}`)
}
main();