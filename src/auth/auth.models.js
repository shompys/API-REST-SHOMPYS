import { Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const authSchema = new Schema({
    client_secret: {type: String, required: true, unique: true}
},{
    timestamps: true,
    versionKey: false 
})

authSchema.statics.encryptClient_secret = async client_secret => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(client_secret, salt);
}
export default model('clients', authSchema);