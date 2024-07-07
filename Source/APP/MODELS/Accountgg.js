const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountGG = new Schema(
  {
    name: { type: String },
    email: { type: String },
    id: { type: String },
    password: { type: String },
    img: { type: String },
    provider: { type: String },
  },
  {
    collection: "accountsgg",
  }
);

module.exports = mongoose.model("AccountGG", AccountGG);
