// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  email: String,
  password: String
}, { collection: 'Login' }); // <== matches your collection name

module.exports = mongoose.model('Login', LoginSchema);
