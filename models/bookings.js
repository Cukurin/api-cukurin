const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookingsSchema = new Schema(
  {
    address: { type: String, required: true }
  },
  { timestamps: true }
);

const Bookings = mongoose.model("Bookings", addressSchema);
module.exports = Bookings;
