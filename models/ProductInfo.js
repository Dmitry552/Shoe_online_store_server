const {Schema, model, ObjectId} = require('mongoose');

const ProductInfo = new Schema({
  product: {type: ObjectId, ref: 'Product'},
  title: {type: String, default: ''},
  description: {type: String, default: ''}
})

module.exports = model('ProductInfo', ProductInfo);