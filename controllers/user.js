const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const UserImage = require("../models/userImage");

module.exports = {
  addUser: async (req, res) => {
    try {
      const existedUser = await user.findone({ name: req.body.name });

      if (existedUser) {
        req.status(404).send({
          message: "user already exist, please continue to login"
        });
      }

      bcyrpt.genSalt(10, function(err, salt) {
        bcyrpt.hash(req.body.password, salt, async function(err, hash) {
          if (!err) {
            const newUser = await User.create({
              firstName: req.body.firstName,
              lastName: req.body.Lastname,
              email: req.body.email,
              password: hash
            });

            res.status(200).send({
              message: "user created",
              newUser
            });
          } else {
            res.send({
              message: `Password is invalid`
            });
          }
        });
      });
    } catch (error) {
      console.log(err);
      console.log(error);
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

  getUser: (req, res) => {
    console.log("masuk");

    User.find({})
      // .populate("address", "address -_id")
      .then(result => {
        res.send(result);
      })
      .catch(error => console.log(error));
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

  uploadImage: (req, res) => {
    UserImage.create({
      filename: req.files[0].filename,
      path: req.files[0].path
    })
      .then(result => res.send(result))
      .catch(error => res.send(error));
  }
};

//   const user = await User.create(req.body);
//   const userAvatar = await UserImage.UserImage.create({
//     filename: req.files[0].filename,
//     path: req.files[0].path
//   });
//   await User.findOneAndUpdate(
//     { _id: user._id },
//     { $push: { avatar: userAvatar._id } },
//     { new: true }
//   );
//   res.status(200).send({
//     message: "user created",
//     user,
//     userAvatar
//   });
// } catch (error) {
//   res.status(400).send({
//     message: "user failed to create",
//     error: error,
//     message
//   });
