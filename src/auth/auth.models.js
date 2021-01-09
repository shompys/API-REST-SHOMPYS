import { Schema, model} from 'mongoose';

const authSchema = new Schema({
    client_id: {type: String, required: true, unique: true},
    client_secret: {type: String, required: true, unique: true}
},{
    timestamps: true,
    versionKey: false 
})

export default model('clients', authSchema);