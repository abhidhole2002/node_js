const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  what: {
    type: String,
    Enum: ["a", "b", "c"],
    required: true,
  },

  drink: {
    type: Boolean,
    default: false,
  },

  ingredient: {
    type: [String],
    default: [],
  },

  sales: {
    type: Number,
    default: 0,
  },
});

const MenuItems = mongoose.model("MenuItems", menuSchema);
module.exports = MenuItems;
