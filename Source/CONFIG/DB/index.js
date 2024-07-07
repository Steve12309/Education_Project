const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Be_Yourself", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });
    console.log("Connect Successfully!!!");
  } catch (err) {
    console.log("Connect Failed!!!");
  }
}

module.exports = { connect };
