import userModel from './users.models';

export const createUser =  async (req, res) => {
    
    try{
        const {name, username, email, password} = req.body
        
        const newUser = new userModel({name, 
                                        username, email, 
                                        password: await userModel.encryptPassword(password)})
        
        const userSaved = await newUser.save();

        res.status(201).json(userSaved)

    }catch(e){
        console.log(`Error post-user: ${e}`)
    }
}

export const getUsers = async (req, res) => {
    try{
        //si no agrego el status por defecto devuelve el cod 200
        const usersSend = await userModel.find();
        res.json(usersSend)

    }catch(e){
        console.log(e)
    }
}

export const getUserById = async (req, res) => {

    try{
        const userSearch = await userModel.findById(req.params.id)
        res.status(200).json(userSearch);
        
    }catch(e){
        console.log('error: '+e)
        res.status(404).json('pusiste mal el id so boludo o no teni webo: '+ req.params.id)
    }

}

export const updateUserById = async (req, res) => {
    try{
        //new true le indicamos que nos devuelva los datos actualizados sino devuelve los viejos
        const {name, username, email, password, roles} = req.body;
        const upUser = {name, username, email, password: await userModel.encryptPassword(password), roles}
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, upUser, {new: true})
        res.status(201).json(updatedUser)
    }catch(e){
        console.log(e)
    }
}

export const deleteUserById = async (req, res) => {
    try{
        const deleteUser = await usersModels.findByIdAndDelete(req.params.id)
        res.status(204).json('true')
    }catch(e){
        console.log(e);
    }
}