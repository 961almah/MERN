const mongoose = require('mongoose');

// User info Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        requireed: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
})