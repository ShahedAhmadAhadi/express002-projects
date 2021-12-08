const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must be provided'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
        
    }
})



module.exports = mongoose.model('Task', taskSchema)