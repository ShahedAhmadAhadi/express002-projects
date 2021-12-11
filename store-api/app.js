require('dotenv').config()
const express = require('express')
const app = express()

const notFoundMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error-handler')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Store api</h1>')
})


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8001

const start = async () => {
    try {
        app.listen(port, `app listening ${port}`)
    } catch (error) {
        console.log(error)
    }
}

start()


