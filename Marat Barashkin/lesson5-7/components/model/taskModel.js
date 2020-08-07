const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    completed: {type: String, default: 'created'},
})

module.exports = mongoose.model('Task', taskSchema, 'tasks')