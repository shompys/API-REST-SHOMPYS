import {apiTwitch} from '../../api/index'

export const listGames = async (req, res) => {

    try{
        const data = await apiTwitch.topGames(100);
        const format = data.data.map(({id, name, box_art_url}) => {
            return{
            id,
            name,
            box_art_url: box_art_url.replace('{width}', 150).replace('{height}', 185)
            }
        });
        console.log(format)
        res.json(format)

    }catch(e){
        console.log(`Error listGames :${e}`)
        res.json({error: e})
    }

}
export const game = async (req,res) => {
    try{
        
        const data = await apiTwitch.game(req.params.id)
        
        if(data.data.length === 0){ 
            throw {error: 'el array esta vacio'};
        }
        const format = data.data[0];
        console.log(format)
        res.json(format)

    }catch(e){
        console.log(e)
        res.json(e)
    }
}

    
    
