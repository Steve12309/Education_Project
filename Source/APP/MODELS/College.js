const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const College = new Schema({
  name: { type: String },
  addres: { type: String },
  img: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("College", College);
