var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  phone_number: Number,
  email: String,
  password: String,
  bookings:[
  {
    type: Schema.Types.ObjectId,
    ref: "Bookings"
  }
  ]
},
{ timestamps: true}
);
const User = mongoose.model("users", userSchema);

module.exports = User;