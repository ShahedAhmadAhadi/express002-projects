const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
require('dotenv').config()

const port = process.env.PORT || 8000

app.use(express.json())


app.get('/', (req, res) => {
    res.send('setup completed')
})


app.use('/api/tasks', tasks)
app.use(notFound)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
