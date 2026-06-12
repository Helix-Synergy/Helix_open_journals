const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  count: { type: Number, default: 1000 }
});

module.exports = mongoose.model("Visitor", visitorSchema);
