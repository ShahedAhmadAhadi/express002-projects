const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

const port = 8000

app.use(express.json())
app.use('/api/tasks', tasks)

app.get('/', (req, res) => {
    res.send('setup completed')
})

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
