const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
  barbershopId: {
    type: Schema.Types.ObjectId,
    ref: 'barbershop'
  },
    name: String,
    price: Number
})