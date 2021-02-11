//client mandando su token (auth.jwt)
import jwt from 'jsonwebtoken';
import clientModel from '../auth/auth.models';

export const verifyToken = async (req, res, next) => {
    let errors = [];
    const token = req.headers['authorization'];
    // console.log(token)
    if(!token) return next([{status: 403, error: `No token provided`}]);//res.status(403).json({message: 'no token provided'})
    
    //extraer id 
    try{
        const decoded = jwt.verify(token, process.env.CLIENT_SECRET);
        const client = await clientModel.findById(decoded.id)
        if(!client) return next([{status: 403, error: `Token and client id do not match`}])
        console.log(decoded)
    }catch(e){
        return next([{status: 403, error: e.message}])
    }

    next()
}
