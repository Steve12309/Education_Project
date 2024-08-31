const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const University = new Schema(
  {
    name: { type: String },
    address: { type: String },
    img: { type: String },
    slug: { type: String },
    history: { type: String },
    facility: { type: String },
    subject: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { versionKey: false },
  {
    collection: "universities",
  }
);

module.exports = mongoose.model("University", University);
