

const login = async (req, res) => {
    res.send('login register')
}

const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `hello`, secret: `secret ${luckyNumber}`})
}

module.exports = {login, dashboard}