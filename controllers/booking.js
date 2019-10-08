const Bookings = require('../models/bookings')

module.exports = {
  //create new booking
  addBooking: (req, res) => {
    try {
    const newBook = Bookings.create({
      name: req.body.name,
      barbershop: req.body.barbershop,
      sevices: req.body.services
    });
    res.status(200).send({
      message: 'Booking berhasil dibuat',
      newBook
    })
  } catch (error){
    res.status(400).send({
      message: 'Booking gagal dibuat',
      error: error.message
    })
  }},
  // showBooking: (req, res)=> {
  //   Bookings.find()
  //   .populate('')
  // }
  
}


