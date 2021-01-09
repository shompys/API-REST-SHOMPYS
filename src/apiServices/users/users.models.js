import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required:true, unique: true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required: true},
    // roles: [
    //     {ref: 'roles', type: Schema.Types.ObjectId}//relacion de 1 a n (un user puede tener muchos roles)
    // ]
}, 
{
    timestamps: true,
    versionKey: false 
})

userSchema.statics.encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(10);//cant. veces aplicar algoritmo de encrypt
    return await bcrypt.hash(password, salt);
    
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);//true or false
}

export default model('users', userSchema);
