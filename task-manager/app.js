const express = require('express')
const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send('setup completed')
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})