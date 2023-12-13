import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        enum: ['male', 'female'],
        default: 'male'
    },
    phone:{
        type: String
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User