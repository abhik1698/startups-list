var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InfoSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Information", InfoSchema);
