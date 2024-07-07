const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountFB = new Schema(
  {
    name: { type: String },
    email: { type: String },
    id: { type: String },
    password: { type: String },
    img: { type: String },
    provider: { type: String },
  },
  {
    collection: "accountsfb",
  }
);

module.exports = mongoose.model("AccountFB", AccountFB);
