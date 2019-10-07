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
    services: [{
      type: Schema.Types.ObjectId,
      ref: 'Services'
    }]

},
{ timestamps: true }
);

const Bookings = mongoose.model("Bookings", bookingsSchema);
module.exports = Bookings;
