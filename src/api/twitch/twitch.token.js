import {getToken, saveToken, timeToken} from './authorizationToken';
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
    //devuelve time del token client to client
    const expired = timeToken(query);

    if(expired <= 120000){
        console.log(`expiro token: ${expired}`)
        const token = await getToken();
        const obj = { id: query._id, token}
        const tk = await saveToken(obj);
        console.log('updated token time, api twitch')
        return tk.access_token;
    }
    // topGames(query.access_token);
    return query.access_token;

}
export default twitchAccessToken;