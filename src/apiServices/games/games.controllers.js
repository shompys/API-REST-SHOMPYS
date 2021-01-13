import {apiTwitch} from '../../api/index'

export const listGames = async (req, res) => {

    try{
        const data = await apiTwitch.topGames(20)
        console.log(data)
        res.json(data)

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

        res.json(data.data)

    }catch(e){
        console.log(e)
        res.json(e)
    }
}

    
    
