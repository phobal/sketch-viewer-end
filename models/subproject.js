const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  description: String,
  filePath: String,
  projectId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('SubProject', schema);

