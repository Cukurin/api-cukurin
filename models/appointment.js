const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var appointmentSchema = new Schema({
    user: {
      type:Schema.Types.ObjectId,
      ref: 'users'
    },
    barbershop : {
      type:Schema.Types.ObjectId,
      ref: 'barbershops'
    },
    service :String,
    date: Date,
    isDone: Boolean 
},
{ timestamps: true }
);

const Appointment = mongoose.model("appointments", appointmentSchema);
module.exports = Appointment;
