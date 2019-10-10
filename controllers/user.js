const objectId = require("mongodb").ObjectID;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const UserImage = require("../models/userImage");

module.exports = {
  getAllUser: (req, res) => {
    User.find({})
      // .populate("appointments", "-user -createdAt -updatedAt")
      .then(result => {
        res.send(result);
      })
      .catch(error => console.log(error));
  },

  addUser: async (req, res) => {
    try {
      const existedUser = await User.findOne({ email: req.body.email });

      if (existedUser) {
        console.log(error)
        res.status(404).send({
          message: "user already exist, please continue to login",
          error: error.message,
          
        });
      } else {
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(req.body.password, salt, async function(err, hash) {
            try {
              const newUser = await User.create({
                username: req.body.username,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                password: hash
              });

              res.status(200).send({
                message: "user created",
                newUser
              });
            } catch (error) {
              res.send({
                message: `Password is invalid`,
                error: error.message
              });
            }
          });
        });
      }
    } catch (error) {
      res.status(400).send({
        message: "user failed to create",
        error: error.message
      });
    }
  },

  login: async (req, res) => {
    try {
      const existedUser = await User.findOne({ username: req.body.username });
      const valid = bcrypt.compareSync(req.body.password, existedUser.password);

      if (valid) {
        const token = await jwt.sign({ data: existedUser }, "secretbycukurin", {
          expiresIn: "1h"
        });
        res.send({
          message: "success to login",
          token
        });
      } else {
        res.send({
          message: "user or password is not valid"
        });
      }
    } catch (error) {
      res.send({
        message: "User not found",
        error: error.message
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
