 import twitchAccessToken from './twitch.Token';
 import fetch from 'node-fetch';

// // export const streamer = async () => {
// //     try{
// //         const tokenData =  await getToken();
// //         console.log(tokenData)
// //         const res = await fetch(`https://api.twitch.tv/helix/search/channels?query=shompys&client-id=${process.env.TWITCH_CLIENT_ID}&Authorization: Bearer ${tokenData.access_token}`)
// //         const data = await res.json();
// //         console.log(data);
// //     }catch(e){
// //         console.log(e);
// //     }

// // }
// export const Authorization = async () => {
//     try{

//         const t = await getToken();
//         const res = await fetch(`https://id.twitch.tv/helix`,{
//             method: 'post',
//             headers : {
//                 Authorization: `${t.token_type} ${t.access_token}` 
//             }
//         })
//         const data = await res.json();
//         console.log(data)
//     }catch(e){
//         console.log(e);
//     }
// }
// export const topGames = async (access_token) => {
//     try{

       
//         const res = await fetch(`https://api.twitch.tv/helix/games/top?first=2`,{
//             headers: {
//                 'Authorization': `Bearer ${access_token}`,
//                 'Client-Id': process.env.TWITCH_CLIENT_ID
//             }
//         })
//         const data = await res.json();
//         console.log(data)

//     }catch(e){
//         console.log(e)
//     }
// }