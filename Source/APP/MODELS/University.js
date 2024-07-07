const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const University = new Schema(
  {
    name: { type: String },
    addres: { type: String },
    img: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "universities",
  }
);

module.exports = mongoose.model("University", University);
