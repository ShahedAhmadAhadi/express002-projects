require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 8000

app.use(express.json())
app.use('/api/tasks', tasks)

app.get('/', (req, res) => {
    res.send('setup completed')
})


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})