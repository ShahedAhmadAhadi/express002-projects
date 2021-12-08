const mongoose = require('mongoose')
// const 

const connectionString = `mongodb+srv://shahed:@nodeexpressprojects.8u8ck.mongodb.net/task-manager?retryWrites=true&w=majority`

mongoose.connect(connectionString).then(() => {
    console.log('connected to db')
}).catch(err => {console.log(err)})