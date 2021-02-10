import userModel from '../apiServices/users/users.models';
// import roleModel from '../apiServices/roles/roles.models';
import * as rolesMethod from '../apiServices/roles/roles.querys';

export const validateName = name => {
    let errors = [];
    const isOnlyString = /^[a-z]+$/gi;

    if (name === undefined || name === '') return [...errors, `Name is required`];

    !isOnlyString.test(name) && (errors = [...errors, `Invalid format`]);

    name.length <= 1 && (errors = [...errors, `Name must be at least 2 characters`]);

    name.length >= 16 && (errors = [...errors, `Name must have a maximum of 15 characters`]);

    return errors;
}
export const validateLastName = lastName => {
    let errors = [];
    const isOnlyString = /^[a-z]+$/gi;

    if (lastName === undefined || lastName === '') return [...errors, `LastName is required`];

    !isOnlyString.test(lastName) && (errors = [...errors, `Invalid format`]);

    lastName.length <= 1 && (errors = [...errors, `LastName must be at least 2 characters`]);

    lastName.length >= 16 && (errors = [...errors, `LastName must have a maximum of 15 characters`]);

    return errors;
}
export const validateUsername = async username => {
    let errors = [];
    const isValidFormat = /^[\w\-]+$/gi; //Deberia admitir unicamente letras, numeros, '-', '_'.

    if (username === undefined || username === '') return [...errors, `Username is required`];

    !isValidFormat.test(username) && (errors = [...errors, `Invalid format`]);

    username.length <= 1 && (errors = [...errors, `Username must be at least 2 characters`]);

    username.length >= 21 && (errors = [...errors, `Username must have a maximum of 20 characters`]);

    const resp = await userModel.findOne({ username: username });

    resp && (errors = [...errors, `Username already exists`]);

    return errors;
}
export const validateEmail = async email => {
    let errors = [];
    const isValidFormat = /^[\w._-]+@[\w._-]+\.[\w._-]+$/gi;

    if (email === undefined || email === '') return [...errors, `Email is required`];

    !isValidFormat.test(email) && (errors = [...errors, `Invalid format`]);

    email.length <= 5 && (errors = [...errors, `Email must be at least 6 characters`]);

    email.length >= 41 && (errors = [...errors, `Email must have a maximum of 40 characters`]);

    const resp = await userModel.findOne({ email: email });

    resp && (errors = [...errors, `Email already exists`]);

    return errors;
}
export const validatePassword = password => {
    let errors = [];

    if (password === undefined || password === '') return [...errors, `Password is required`];

    return errors;
}
export const validateRoles = async roles => {
    let errors = []

    // const resp = await roleModel.find({ name: { $in: roles } });
    const resp = await rolesMethod.verifyRoles(roles);
    resp.length === 0 && (errors = [...errors, `Roles does not exist`]);
    return errors;
}
