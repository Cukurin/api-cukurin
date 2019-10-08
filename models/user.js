const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    phoneNumber:String,
    email: String,
    password: String,
    bookings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Bookings"
      }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);
module.exports = User;
