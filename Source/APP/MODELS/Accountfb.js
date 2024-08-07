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
    testType1: { type: String },
    testType2: { type: String },
    Holland: { type: String },
    Holland_Score: {
      A: { type: Number },
      B: { type: Number },
      C: { type: Number },
      D: { type: Number },
      E: { type: Number },
      F: { type: Number },
    },
    Mbti: { type: String },
    Mbti_Score: {
      A: { type: String },
      B: { type: String },
      C: { type: String },
      D: { type: String },
    },
  },
  {
    collection: "accountsfb",
  }
);

module.exports = mongoose.model("AccountFB", AccountFB);
