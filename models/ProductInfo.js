const {Schema, model, ObjectId} = require('mongoose');

const ProductInfo = new Schema({
  product: {type: ObjectId, ref: 'Product'},
  title: {type: String, default: ''},
  description: {type: String, default: ''}
})

module.export = model('ProductInfo', ProductInfo);