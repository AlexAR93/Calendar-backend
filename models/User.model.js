import {Schema, model} from "mongoose";

const SchemaUser= Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    }
})

const User=model('User', SchemaUser);

export default User;