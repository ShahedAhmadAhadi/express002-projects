require('dotenv').config()
const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    if(!username || !password){
        throw new CustomAPIError('Please provide email and password', 400)
        res.status(200).send('s')
    }

    const id = new Date().getDate()
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    // console.log(id)
    res.status(200).json({msg: `user created`, token})
}

const dashboard = async(req, res) => {

    console.log(req.user)
    
    const luckyNumber = Math.floor(Math.random()*100)
    try{
        res.status(200).json({msg: `hello ${req.user.username}`, secret: `secret ${luckyNumber}`})

    }catch (error) {
        throw new CustomAPIError('Not Authorized to access', 401)
    }
}

module.exports = {login, dashboard}