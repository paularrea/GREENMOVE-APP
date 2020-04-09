const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  sobreMi: {type: String},
  password: {type: String, required: true},
  imageUrl: {type: String},
  accions: [{myAccions:{ type: Schema.Types.ObjectId, ref: "User"},
            joinAccions:{ type: Schema.Types.ObjectId, ref: "Event"}
            }         
 ],
  CP: {type: String},
  isUser: { type: Boolean, default: false } 
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;