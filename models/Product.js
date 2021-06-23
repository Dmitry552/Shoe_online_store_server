const {Schema, model, ObjectId} = require('mongoose');

const Product = new Schema({
  name: {type: String, default: ''},
  rating: {type: ObjectId, ref: 'Rating'},
  catalog: {type: ObjectId, ref: 'Catalog'},
  brand: {type: ObjectId, ref: 'Brand'},
  praise: {type: Number, default: 0},
  discount: {type: ObjectId, ref: 'Discount'}
})

module.exports = model('Product', Product);