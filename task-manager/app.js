const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 8000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('setup completed')
})

app.use('api/tasks', tasks)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})