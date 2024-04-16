const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  work: {
    type: String,
    enum: ["a", "b", "c"],
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },

  Email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", demoSchema);
module.exports = User; 
