const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    universityId: { type: String },
    comment: [
      {
        user: { type: String },
        img: { type: String },
        message: { type: String },
        timestamp: { type: Date, default: Date.now },
        state: { type: String },
        userId: { type: String },
      },
    ],
  },
  { versionKey: false },
  {
    collection: "comments",
  }
);

module.exports = mongoose.model("Comment", Comment);
