const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var barberShopSchema = new Schema({
  name : String,
  address: String,
  phoneNumber: String,
  rating: Number,
  lat: Number,
  lng: Number,
  services: [String],
  imageUrl: String,
  comment: [String]
  
})

const BarberShop = mongoose.model("barbershops", barberShopSchema);
module.exports = BarberShop;