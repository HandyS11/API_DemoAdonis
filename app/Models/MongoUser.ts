const mongoose = require("mongoose")


const adressSchema = new mongoose.Schema(
  {
    street: String,
    city: String
  }
)

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    minLength: 10,
    required: true,
    lowercase: true,
    unique: true,
  },
  adress: adressSchema,
})

module.exports = mongoose.model("MongoUser", userSchema)