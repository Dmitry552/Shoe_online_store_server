const {Schema, model, ObjectId} = require('mongoose');

const Rating = new Schema({
  user: [{type: ObjectId, ref: 'User'}],
  product: {type: ObjectId, ref: 'Product'},
  rat: {type: Number, default: 0, min: 0, max: 5}
})

module.exports = model('Rating', Rating);