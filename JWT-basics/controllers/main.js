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
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `hello`, secret: `secret ${luckyNumber}`})
}

module.exports = {login, dashboard}