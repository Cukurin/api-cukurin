const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var barberShopSchema = new Schema({
  name : String,
  address: String,
  phoneNumber: Number,
  rating: Number,
  lat: Number,
  lng: Number,
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Services'
  }]
})