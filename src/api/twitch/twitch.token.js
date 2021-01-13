import {getToken, saveToken} from './authorizationToken';
import twitchTokenModel from './twitch.Token.models';

const twitchAccessToken = async () => {
    //al buscar uno en especifico devuelve null si no existe pero si bucas find devuelve array (solucion .length)
    const query = await twitchTokenModel.findOne({})
    
    if(!query){
        //no existe token asi que generamos!!
        const token = await getToken();
        const tk = await saveToken({token});
        console.log('first run, api twitch');
        return tk.access_token;
    }
    

    const limit = query.expires_in          //limite estipulado por twitch
    const upd = query.updatedAt.getTime()   //fecha ultima modificada
    const d = new Date();                   //fecha actual
    const current = d.getTime();            //fecha actual en unix
    const result = current - upd            //unix tiempo transcurrido desde creacion                   
    const expired = limit - result;         //unix restante
    //console.log(expired)

    if(expired <= 0){
        const token = await getToken();
        const obj = { id: query._id, token}
        const tk = await saveToken(obj);
        return tk.access_token;
    }
    // topGames(query.access_token);
    return query.access_token;

}
export default twitchAccessToken;