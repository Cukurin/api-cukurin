const objectId = require("mongodb").ObjectID;
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
  addAppointment: (req, res) => {
    try {
      const newBook = Bookings.create({
        name: req.body.name,
        barbershop: req.body.barbershop,
        sevices: req.body.services
      });
      res.status(200).send({
        message: "Booking berhasil dibuat",
        newBook
      });
    } catch (error) {
      res.status(400).send({
        message: "Booking gagal dibuat",
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
