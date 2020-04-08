const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl:{ type: String},
  creator:{ type: Schema.Types.ObjectId, ref: "User"},
  members:[{ type: Schema.Types.ObjectId, ref: "User"}],
  materials:{type: String},
  street: { type: String},
  postalCode: { type: String},
  number: { type: String},
  city: { type: String},
  duration: {type: Number},
  date:{ type: Date},
  coordinates:[{type: Number}]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;