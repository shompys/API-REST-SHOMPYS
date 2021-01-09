import {Schema, model} from 'mongoose';

const roleSchema = new Schema({
    name: {type: String, required: true, unique: true}
},{
    versionKey: false
})

export default model('roles', roleSchema);