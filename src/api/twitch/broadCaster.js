import twitchAccessToken from './twitch.Token';  
import fetch from 'node-fetch';
const getBroadcaster = async (broadCasterName) => {

    try{
        const access_token = await twitchAccessToken();
        const response = await fetch(`https://api.twitch.tv/helix/search/channels?query=${broadCasterName}`,{
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Client-Id': process.env.TWITCH_CLIENT_ID
            }
        })
        const data = await response.json();
        const channel = data.data.filter(e => e.display_name === broadCasterName);
        
        return channel[0];
        
    }catch(e){
        console.log(`Error en apiTwitch metodo getBroadcaster: ${e}`)
        console.log(e)
        return e;
    }
    
}
export default getBroadcaster;