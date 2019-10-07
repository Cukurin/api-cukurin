const Service = require('../models/services')

module.exports = {
  addService: (req, res) => {
    const newService = Service.create({
      name: req.body.name,
      price: req.body.price,
    })
  }
}