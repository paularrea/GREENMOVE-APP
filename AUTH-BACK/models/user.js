const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  sobreMi: {type: String},
  password: {type: String, required: true},
  imageUrl: {type: String},
  myAccions:[{ type: Schema.Types.ObjectId, ref: "Event"}],
  joinAccions:[{ type: Schema.Types.ObjectId, ref: "Event"}],
  notifications: [{
    message:{type:String},
    eventId:{ type: Schema.Types.ObjectId, ref: "Event"},
    creatorId:{ type: Schema.Types.ObjectId, ref: "User"}
  }],
  CP: {type: String},
  isUser: { type: Boolean, default: false } 
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;