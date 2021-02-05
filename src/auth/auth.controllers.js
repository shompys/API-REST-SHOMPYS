import clientModel from './auth.models';
import config from '../config';
import jwt from 'jsonwebtoken';
//validar y authenticar el cliente aun no funciona
export const createClient = async (req, res) => {
    
    try{
         const {client_secret} = req.body;

         const client = new clientModel({client_secret});
         const savedClient = await client.save();
        // // receives three parameters: id ,, secret word and time setting
        //console.log(process.env.SECRET)
         console.log(savedClient);
         const access_token = jwt.sign({id : savedClient._id}, savedClient.client_secret, { expiresIn: 86400 });
         res.header('access-token', access_token).json({});
         console.log(access_token)
    }catch(e){
        console.log(`Error post-Client: ${e}`);
        res.json(`Error: ${e}`)
    }
    
     
}

export const updateClient = async (req, res) => {
    try{
        const {client_id, client_secret} = req.body;
        //descifrar hash
        const updateClient = await clientModel.findByIdAndUpdate(req.params.id)
    }catch(e){
        console.log(`Error put-Client: ${e}`);
    }
}