import twitchAccessToken from './twitch.Token';
import fetch from 'node-fetch';
//get
export const topGames = async (cant) => {
    try{
        const access_token = await twitchAccessToken();

        const response = await fetch(`https://api.twitch.tv/helix/games/top?first=${cant}`,{
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Client-Id': process.env.TWITCH_CLIENT_ID
            }
        })

        return await response.json();

    }catch(e){
        
        console.log(`Error en apiTwitch metodo topGames: ${e}`)
        return {error: e}
    }
}
export const game = async (param) => {

    try{
    // pregunta ¿no es un numero?
    // respuesta si no es un numero devuelve true. :)
    let search
    if(isNaN(parseInt(param, 10))){
        search = `name=${param}`;
    }else{
        search = `id=${param}`;
    }
        const access_token = await twitchAccessToken();
        const response = await fetch(`https://api.twitch.tv/helix/games?${search}`,{
            headers:{
                'Authorization': `Bearer ${access_token}`,
                'Client-Id': process.env.TWITCH_CLIENT_ID
            }
        })
        return await response.json();
        
    }catch(e){
        console.log(`Error en apiTwitch metodo game: ${e}` )
        return {error:e}
    }

}


