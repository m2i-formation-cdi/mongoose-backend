const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/formation', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema(
   {
      userName: String,
      password: String,
      login: {type: String, unique: true, required: true}
   }
);


module.exports = mongoose.model('users', UserSchema);