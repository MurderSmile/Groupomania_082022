//  VALIDE  //

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  date: { type:String, required: true, default:Date.now()},
  author: {type: String, required: true},
  text: { type: String, required: true },
  imageUrl: { type: String, required: false },
  likes: { type: Number, required: true, default:0 },
  usersLiked: { type: Array, required: true, default:[]},
});

module.exports = mongoose.model('Post', postSchema);