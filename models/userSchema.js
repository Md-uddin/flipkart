import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,// for spaces to be trimed
        min: 5,
        max:20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,// for spaces to be trimed
        min: 5,
        max:20
    },
    username: {
        type: String,
        required: true,
        trim: true,// for spaces to be trimed
        unique: true,//for username to be unique
        index: true,//for search super fast
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        trim: true,// for spaces to be trimed
        unique: true,
        lowercase:true
    },
    password: {
        type: String,
        required:true
    },
    phone: {
        type: String,
    }

})

const user = mongoose.model('user', userSchema);
export default user;