const mongoose = require('mongoose')
const bcryptjs = require('bcrypt');
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: String,

  phoneNumber: String
})

//User data save honay se pehle ye function chalay ga
UsersSchema.pre("save", function (next) {
  const user = this

  const salt = bcryptjs.genSaltSync(10)
  const hash = bcryptjs.hashSync(user.password, salt)

  user.password = hash

  next()
})

const Users = mongoose.model('users', UsersSchema)

module.exports = Users
