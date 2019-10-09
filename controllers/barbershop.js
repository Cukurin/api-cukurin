const objectId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');

const Barbershops = require('../models/barbershop')

module.exports = {
  getAllBarberShop: (req, res) => {
    Barbershops.find({})
      // .populate("address", "address -_id")
      .then(result => {
        res.send(result);
      })
      .catch(error => console.log(error));
  },

  getOneBarberShop: (req, res) => {
    Barbershops.findOne({ 
      _id: objectId(req.params.id) 
      // name: req.params.name
    })
      // .populate("address", "address -_id")
      .then(result => {
        res.send(result);
      })
      .catch(error => console.log(error))
  },

  addBarberShop: async (req, res) => {
    try {
      const newBarberShop = await Barbershops.create({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        lat: req.body.lat,
        lng: req.body.lng,
        rating: req.body.rating,
        services: req.body.services
      });

      res.status(200).send({
        message: "BarberShop created",
        newBarberShop
      });
    } catch (error) {
      res.status(400).send({
        message: "BarberShop failed to create",
        error: error.message
      });
    }
  },

  deleteBarberShop: (req, res) => {
    Barbershops.deleteOne(
      {
        _id: req.params.id
      },
      (err, result) => {
        try {
          res.send(result);
        } catch (err) {
          console.log(error);
          console.log(err);
        }
      }
    );
  },

  updateBarberShop: (req, res) => {
    Barbershops.findOneAndUpdate(
      { _id: req.params.id },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
      },
      function(err, result) {
        if (err) {
          res.status(400).send({
            message: `error`,
            err
          });
        } else {
          res.status(200).send({
            message: `update success`,
            result
          });
        }
      }
    );
  },

}