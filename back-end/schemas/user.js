const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

  name : String,
  email : String,
  username : String,
  password: String

});

exports = userSchema
