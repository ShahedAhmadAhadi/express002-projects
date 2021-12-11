require('dotenv').config()
// require('express-async-errors')
const express = require('express')
const app = express()

const notFoundMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error-handler')
const connectDB = require('./db/connect')

const productsRouter = require('./routes/products')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Store api</h1>')
})

app.use('/api/products/', productsRouter)


// app.use(notFoundMiddleware)
// app.use(errorMiddleware)

const port = process.env.PORT || 8001

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`port listening on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()


