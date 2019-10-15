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
      .catch(error => {
        res.status(400).send({
          message: "There is no Barbershop",
          error: error.message
        });
      });
  },

  getOneBarberShop: (req, res) => {
    console.log(req.params.id);
    
    Barbershops.findOne({ 
      _id: objectId(req.params.id) 
    })
      // .populate("address", "address -_id")
      .then(result => {
        res.send(result);
        console.log(result);
        
      })
      .catch(error => {
        res.status(400).send({
          message: "Barbershop not found",
          error: error.message
        });
      })
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
        services: req.body.services,
        imageUrl: req.body.imageUrl
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

  deleteBarberShop: async (req, res) => {
    const existedBarber = await Barbershops.findOne({ _id: objectId(req.params.id)})

    if (existedBarber){
      Barbershops.findOneAndDelete(
        {
          _id: objectId(req.params.id)
        },
        (err, result) => {
          try {
            res.status(200).send({
              message: 'Success delete barber',
              result
            });
          } catch (error) {
            res.status(400).send({
              message: err,
              error: error.message
            });
          }
        }
      );
    } else {
      res.status(400).send({
        message: 'BarberShop is not found',
      });
    }
  },

  updateBarberShop: (req, res) => {
    Barbershops.findOneAndUpdate(
      { _id: objectId(req.params.id)},
      {
        name: req.body.name,
        address: req.body.address
      },
      (err, result) => {
        try {
          res.status(200).send({
            message: `update success`,
            result
          });
        } catch (error) {
          res.status(400).send({
            message: err,
            error: error.message
          });
        }
      }
    );
  },

}