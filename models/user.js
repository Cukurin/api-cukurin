const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    username: String,
    phoneNumber:String,
    email: String,
    password: String,
    appointments: [
      {
        type: Schema.Types.ObjectId,
        ref: "appointments"
      }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);
module.exports = User;
