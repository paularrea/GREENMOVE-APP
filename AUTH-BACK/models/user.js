const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  imageUrl: {type: String},
  accions: [{myAccions:{ type: Schema.Types.ObjectId, ref: "user"},
            joinAccions:{ type: Schema.Types.ObjectId, ref: "events"}
            }         
 ],
  CP: {type: String},
  isUser: { type: Boolean, default: false } 
}, {
  timestamps: true
});

const User = mongoose.model("user", userSchema);

module.exports = User;