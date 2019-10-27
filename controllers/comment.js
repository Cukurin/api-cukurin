const objectId = require('mongodb').ObjectID;

const User = require('../models/user')
const Barbershops = require('../models/barbershop')
const Comment = require('../models/comment');

module.exports = {
  getAllComments: (req, res) => {
    Comment.find({})
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(400).send({
        message: "there's no comments",
        error: error.message
      });
    });
  },
  addComment: async (req, res) => {
    console.log(req.body);
    try {
      const getBarbershop = await Barbershops.findOne({_id:objectId(req.body.barbershop)})

      const newComment = await Comment.create({
        user: getUser,
        barbershop: getBarbershop,
      });
      const user = await User.findOneAndUpdate(
        {_id: objectId(req.body.user)},
        {$push: {comments: newComment._id}},
        {new: true}
      )
      res.status(200).send({
        message: 'Comment added',
        newComment,
        user
      });
    } catch(error) {
      res.status(400).send({
        message: 'failed to comment',
        error: error.message
      })
    }
  }
}