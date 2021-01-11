import {Schema, model} from 'mongoose';

const twitchTokenSchema = new Schema({
    access_token: {type: String},
    expires_in: {type: Number},
    scope:[],
    token_type: {type: String}
},{
    timestamps: true,
    versionKey: false
})

export default model('twitch_api_access_token', twitchTokenSchema);
