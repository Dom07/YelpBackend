var mongoose = require('mongoose')

var userScehma = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    isOwner: Boolean
})

var User = mongoose.model("User", userScehma)

module.exports = User