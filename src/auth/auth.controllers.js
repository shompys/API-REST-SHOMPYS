import clientModel from './auth.models';
import jwt from 'jsonwebtoken';

export const createClient = async (req, res, next) => {
    //Por el momento solo es una unica clave a la app en general
    
    
    try{
        const {client_secret} = req.headers;
        if(!(process.env.CLIENT_SECRET === client_secret)) throw new Error(`invalid client_secret or not exist :(`);
        const client = new clientModel({client_secret : await clientModel.encryptClient_secret(client_secret)});
        const savedClient = await client.save();
        const token = jwt.sign({id: client._id}, client_secret);
        console.log(token);
        res.json(token);
        
    }catch(e){
        
        return next([{status: 401, error: e.message}])
        
    }
    

    
    // const savedClient = await client.save();

    // jwt.sign(savedClient, )


    // try{
    //      const {client_secret} = req.body;

    //      const client = new clientModel({client_secret});
    //      const savedClient = await client.save();
    //     // // receives three parameters: id ,, secret word and time setting
    //     //console.log(process.env.SECRET)
    //      console.log(savedClient);
    //      const access_token = jwt.sign({id : savedClient._id}, savedClient.client_secret, { expiresIn: 86400 });
    //      res.header('access-token', access_token).json({});
    //      console.log(access_token)
    // }catch(e){
    //     console.log(`Error post-Client: ${e}`);
    //     res.json(`Error: ${e}`)
    // }
    
     
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