const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, trim: true,
        lowercase: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true, minLength: 6
    },
    name: {
        type: String,
        required: true, trim: true,
    },
    previoulyWatched: {
        type: [Number]
    }
});



const User = mongoose.model('User', userSchema)


module.exports = { User }