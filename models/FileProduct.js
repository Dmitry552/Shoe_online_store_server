const {Schema, model, ObjectId} = require('mongoose');

const FileProduct = new Schema({
  owner: {type: ObjectId, ref: 'User'},
  product: {type: ObjectId, ref: 'Product'},
  type: {type: String, required: true},
  name: {type: String, required: true},
  path: {type: String, default: ''},
  date: {type: Date, default: Date.now()}, 
  size: {type: Number, default: 0}
})

module.exports = model('FileProduct', FileProduct);