import roleModel from './roles.models';

export const verifyRoles = async roles => {

    return await roleModel.find({name: {$in: roles}});

}