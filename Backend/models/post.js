//  VALIDE  //

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: true, default:0 },
  usersLiked: { type: Array, required: true, default:[]},
});

module.exports = mongoose.model('Post', postSchema);