
export const validateUser = async (req, res, next) => {

    const {name, username, email, password, roles} = req.body;

    if(typeof name !== 'string'){
        next(new Error('name must be a string'));
    }else{
        next(); //todo bien seguimos
    }
    
    
}