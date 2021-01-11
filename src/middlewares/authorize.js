//client mandando su token (auth.jwt)
import jwt from 'jsonwebtoken';
import config from '../config';
import clientModel from '../auth/auth.models';

export const verifyToken = async (req, res, next) => {
    
    const token = req.headers['x-access-token'];
    console.log(token)
    if(!token) return res.status(403).json({message: 'no token provided'})

    //extraer id 
    const decoded = jwt.verify(token, config.WORD_SECRET)
    console.log(decoded)
    // revisar y adaptar para client
    const client = await clientModel.findById(decoded.id)
    if(!user) return res.status(404).json({client: 'no client found'});
    next()

}