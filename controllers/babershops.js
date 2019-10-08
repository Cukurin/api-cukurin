const objectId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');

const Barbershops = require('../models/babershops')

module.exports = {
  getAllShops : (req, res) => {
    Barbershops.find({})
    .then(result => {
      res.send(result);
    })
    .catch(error => console.log(error))
  }
}