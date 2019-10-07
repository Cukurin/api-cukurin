var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phoneNumber: String,
  bookings:[
  {
    type: Schema.Types.ObjectId,
    ref: "Bookings"
  }
  ],
  avatar: [
    {
      type: Schema.Types.ObjectId,
      ref: "userImage"
    }
  ]
},
{ timestamps: true}
);
const User = mongoose.model("users", userSchema);

module.exports = User;