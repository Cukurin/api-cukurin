const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookingsSchema = new Schema({
    user: {
      type:Schema.Types.ObjectId,
      ref: 'users'
    },
    barbershop : {
      type:Schema.Types.ObjectId,
      ref: 'barbershop'
    },
},
{ timestamps: true }
);

const Bookings = mongoose.model("bookings", bookingsSchema);
module.exports = Bookings;
