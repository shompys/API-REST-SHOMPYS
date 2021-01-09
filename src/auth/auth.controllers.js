import clientModel from './auth.models';

export const createClient = async (req, res) => {
    
    try{
        const {client_id, client_secret} = req.body;

        const client = new clientModel({ client_id, client_secret});
        const savedClient = await client.save();
        res.json(savedClient);

    }catch(e){
        console.log(`Error post-Client: ${e}`);
        res.json(`Error: ${e}`)
    }

}

export const updateClient = async (req, res) => {
    try{
        const {client_id, client_secret} = req.body;
        //descifrar hash
        const updateClient = await clientModel.findByIdAndUpdate(req.params.id, )
    }catch(e){
        console.log(`Error put-Client: ${e}`);
    }
}