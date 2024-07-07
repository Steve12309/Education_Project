const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema(
  {
    name: { type: String },
    email: { type: String },
    id: { type: String },
    password: { type: String },
    img: { type: String },
  },
  {
    collection: "accounts",
  }
);

module.exports = mongoose.model("Account", Account);
