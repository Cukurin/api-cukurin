const objectId = require("mongodb").ObjectID;

const User = require('../models/user')
const Barbershops = require('../models/barbershop')
const Appointment = require("../models/appointment");

module.exports = {
  getAllAppointment: (req, res) => {
    Appointment.find({})
      // .populate("address", "address -_id")
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.status(400).send({
          message: "There is no Appointment",
          error: error.message
        });
      });
  },

  getOneAppointment: (req, res) => {
    Appointment.findOne({ _id: objectId(req.body.id) })
      // .populate("address", "address -_id")
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.status(400).send({
          message: "Appointment not found",
          error: error.message
        });
      });
  },

  //create new booking
  addAppointment: async (req, res) => {
    try {

      const getUser = await User.findOne({ _id: objectId(req.body.user) })
      const getBarbershop = await Barbershops.findOne({ _id: objectId(req.body.barbershop) })

      const newAppointment = await Appointment.create({
        user: getUser,
        barbershop: getBarbershop,
        service: req.body.service,
        date: req.body.date,
        isDone: req.body.isDone
      });

      const user = await User.findOneAndUpdate(
        {_id: objectId(req.body.user)},
        {$push: {appointments: newAppointment._id}},
        {new : true}
      )

      res.status(200).send({
        message: "Appointment has been created",
        newAppointment,
        user,
      });
    } catch (error) {
      res.status(400).send({
        message: "Failed to created Appointment",
        error: error.message
      });
    }
  },
  
  deleteAppointment: (req, res) => {
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

  updateAppointment: (req, res) => {
    Appointment.findOneAndUpdate(
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
};
