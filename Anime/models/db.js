const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
});
const Anime = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  synopsis: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  episodes: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
});

const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm;
