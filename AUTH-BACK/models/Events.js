const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl:{ type: String, required: true },
  creator:{ type: Schema.Types.ObjectId, ref: "user"},
  members:[{ type: Schema.Types.ObjectId, ref: "user"}],
  materials:{type: String},
  street: { type: String, required: true },
  postalCode: { type: String, required: true },
  duration: {type: Number},
  date:{ type: Date, required: true },
  coordinates:[{type: Number}]
});

const Events = mongoose.model("events", eventSchema);

module.exports = Events;