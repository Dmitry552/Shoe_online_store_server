const {Schema, model, ObjectId} = require('mongoose');

const Discount = new Schema({
  number: {type: Number, default: 0},
  product: [{type: ObjectId, ref: 'Product'}]
})

module.exports = model('Discount', Discount);