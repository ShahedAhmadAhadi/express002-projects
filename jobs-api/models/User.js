const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide Name'],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, 'Please Provide email'],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide email address'],
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    }
})

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.getSalt(10)
    this.password = await bcrypt.jash(this.password, salt)
    next()
})

module.exports = mongoose.model('User', UserSchema)