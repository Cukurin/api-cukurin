const Bookings = require('../models/bookings')
const User = require("../models/user")

module.exports = {
  addAdress: async (req, res) => {
    // create the address first to generate its `_id`
    const address = await Bookings.create({
      address: req.body.bookings})
    // then pass the `address._id to user
    const user = await User.findOneAndUpdate(
        {_id: req.body._id},
        {$push: {bookings: bookings._id}},
        {new: true}
    )
    res.status(200).send({
      message:  "created new address success",
      address,
      user
  })
  }}



