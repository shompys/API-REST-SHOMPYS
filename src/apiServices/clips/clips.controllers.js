import {apiTwitch} from '../../api/index';

export const listClips = async (req, res) => {

    try{
        const data = await apiTwitch.clips(10)
        const format = data.data;
        console.log(format)
        res.json(format)

    }catch(e){
        console.log(`Error listGames :${e}`)
        res.json({error: e})
    }

}