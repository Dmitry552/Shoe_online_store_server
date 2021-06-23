const {Schema, model, ObjectId} = require('mongoose');

const Comparison = new Schema({
  user: {type: ObjectId, ref: 'User'},
  product: [{type: ObjectId, ref: 'Product'}]
})

module.exports = model('Comparison', Comparison);