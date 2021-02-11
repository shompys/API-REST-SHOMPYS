import * as rolesMethod from '../roles/roles.querys';
import userModel from './users.models';

export const createUser = async (req, res) => {
    const { name, lastname, username, email, password, roles } = req.body;

    //En esta instancia debe existir almenos 1 a n roles
    const resp = await rolesMethod.verifyRoles(roles);
    const rolesId = resp.map(roleId => roleId._id);

    const newUser = new userModel({
        name,
        lastname,
        username,
        email,
        password: await userModel.encryptPassword(password),
        roles: rolesId

    })

    const userSaved = await newUser.save();
    console.log(userSaved);
    res.status(201).json(userSaved);

}

export const getUsers = async (req, res) => {

    //si no agrego el status por defecto devuelve el cod 200
    const usersSend = await userModel.find();
    res.status(200).json(usersSend);

}

export const getUserById = async (req, res, next) => {

    try {
        const userSearch = await userModel.findById(req.params.id);

        res.status(200).json(userSearch);

    } catch (e) {
        
        return next([{ status: 404, error: `This ID is invalid ${req.params.id}` }]);

    }

}

export const updateUserById = async (req, res, next) => {
    try {
        //new true le indicamos que nos devuelva los datos actualizados sino devuelve los viejos
        const resp = await rolesMethod.verifyRoles(roles);
        const rolesId = resp.map(roleId => roleId._id);

        const { name, lastname, username, email, password, roles } = req.body;
        const upUser = {
            name,
            lastname,
            username,
            email,
            password: await userModel.encryptPassword(password),
            roles: rolesId
        }
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, upUser, { new: true });
        console.log(updatedUser);
        res.status(200).json({status : 200, message: `The user with ID: ${updatedUser._id} has been updated successfully`});
    } catch (e) {
        // console.log(e)
        return next([{ status: 404, error: `This ID is invalid ${req.params.id}` }]);
    }
}

export const deleteUserById = async (req, res, next) => {
    try {
        const deleteUser = await userModel.findByIdAndDelete(req.params.id);
        //si el id respeta 24 caracteres no genera error el metodo findByIdAndDelete pero retorna null.
        console.log(deleteUser);
        if(deleteUser === null) throw new Error('null');
        
        res.status(200).json({status: 200, message: `The user with ID: ${deleteUser._id} and username: ${deleteUser.username} has been successfully removed`})
    } catch (e) {
        
        return next([{status: 404, error: `This ID is invalid ${req.params.id}` }]);
    }
}
