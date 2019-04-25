const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/formation', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema(
   {
      userName: String,
      password: String,
      login: String
   }
);


module.exports = mongoose.model('users', UserSchema);