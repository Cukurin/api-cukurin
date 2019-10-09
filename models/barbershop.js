const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var barberShopSchema = new Schema({
  name : String,
  address: String,
  phoneNumber: Number,
  rating: Number,
  latitude: Number,
  longitude: Number,
  services: [String],
  imageUrl: String
  
})

const BarberShop = mongoose.model("barbershops", barberShopSchema);
module.exports = BarberShop;