const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://shehrozobaid8:shehrozobaid@cluster0.7nwlbpk.mongodb.net/OlxWebsite"

mongoose.connect(mongoURI)

module.exports = mongoose;