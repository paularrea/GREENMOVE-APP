const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  descriptionProblem: { type: String, required: true },
  descriptionSolution: { type: String, required: true },
  imageUrl:{ type: String, required: true },
  creator:{ type: Schema.Types.ObjectId, ref: "User"},
  members:[{ type: Schema.Types.ObjectId, ref: "User"}],
  duration: {type: String , required: true },
  location: {type: String , required: true },
  date:{ type: String , required: true },
  coordinates:[{type: Number}]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;