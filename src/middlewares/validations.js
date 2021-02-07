import * as validator from '../libs/fieldValidator';

export const validateUser = async (req, res, next) => {

    const {name, lastname,username, email, password, roles} = req.body;
    
    let data = [];

    if(validator.validateName(name).length > 0) data = [...data, {field : 'name', errors : validator.validateName(name)}];

    if(validator.validateLastName(lastname).length > 0) data = [ ...data, {field : 'lastname', errors : validator.validateLastName(lastname)}];

    //verify in db response promise : 
    const errorsUsername = await validator.validateUsername(username);
    if(errorsUsername.length > 0) data = [ ...data, {field : 'username', errors : errorsUsername}];

    const errorsEmail = await validator.validateEmail(email);
    if(errorsEmail.length > 0) data = [ ...data, {field : 'email', errors : errorsEmail}];

    if(validator.validatePassword(password).length > 0) data = [ ...data, {field : 'password', errors : validator.validatePassword(password)}];

    const errorsRoles = await validator.validateRoles(roles);
    if(errorsRoles.length > 0) data = [ ...data, {field : 'roles', errors: errorsRoles}];
    
    //finish !!
    //there is errors :(
    if(data.length > 0) return next(data);
    
    //There is do not errors :)
    next();

}