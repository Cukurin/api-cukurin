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

  addBarberShop: async (req, res) => {
    try {
      const newBarberShop = await Barbershops.create({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        latitide: req.body.latitude,
        longitude: req.body.longitude,
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

  login: async (req, res) => {
    try {
      const existedUser = await User.findOne({ eamil: req.body.email });
      const valid = bcrypt.compareSycn(req.body.password, existedUser.password);

      if (valid) {
        const token = await jwt.toString(
          { data: existedUser },
          "jangansampaioranglaintau",
          {
            expresin: "1h"
          }
        );
        res.send({ message: "password is not valid" });
      }
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },

  deleteUser: (req, res) => {
    User.deleteOne(
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

  updateUser: (req, res) => {
    User.findOneAndUpdate(
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