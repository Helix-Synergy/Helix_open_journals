const mongoose = require("mongoose");

const JournalsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 1000,
    },
  },
  { timestamps: true },
);

const JournalsModel = mongoose.model("HelixOpenAccessJournal", JournalsSchema);

module.exports = JournalsModel;
