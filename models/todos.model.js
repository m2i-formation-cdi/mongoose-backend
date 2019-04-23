const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/formation', {useNewUrlParser: true});

const todoSchema = new Schema(
   {
      taskName: String,
      done: Boolean,
      createdAt: Date
   }
);

module.exports = mongoose.model('tasks', todoSchema);