const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    user: {
      type:Schema.Types.ObjectId,
      ref: 'users'
    },
    barbershop : {
      type:Schema.Types.ObjectId,
      ref: 'barbershops'
    },
    date: Date,
},
{ timestamps: true }
);

const Comment = mongoose.model("comments", commentSchema);
module.exports = Comment;
