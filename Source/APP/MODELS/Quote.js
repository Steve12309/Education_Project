const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Quote = new Schema(
  {
    quote: { type: String },
    author: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "quotes",
  }
);

module.exports = mongoose.model("Quote", Quote);
