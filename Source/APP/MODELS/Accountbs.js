const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema(
  {
    name: { type: String },
    email: { type: String },
    id: { type: String },
    password: { type: String },
    img: { type: String },
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
      a: { type: String },
      b: { type: String },
      c: { type: String },
      d: { type: String },
    },
    universities: [
      {
        name: { type: String },
        address: { type: String },
        img: { type: String },
        slug: { type: String },
        history: { type: String },
        facility: { type: String },
      },
    ],
    Pomoimg: { type: String },
    Todolist: [{ task: { type: String }, status: { type: Boolean } }],
    Eventlist: [
      {
        Calendar: { type: String },
        Subject: { type: String },
        Dateleft: { type: String },
      },
    ],
    Pomotime: [
      {
        pomodoro: { type: Number },
        shortBreak: { type: Number },
        longBreak: { type: Number },
      },
    ],
    Timetable: [
      {
        time: { type: String },
        events: [{ type: String }],
      },
    ],
    Notesdata: [{ type: Object }],
  },
  { versionKey: false },
  {
    collection: "accounts",
  }
);

module.exports = mongoose.model("Account", Account);
