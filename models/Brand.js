const {Schema, model, ObjectId} = require('mongoose');

const Brand = new Schema({
  name: {type: String, default: ''},
  product: [{type: ObjectId, ref: 'Product'}],
  
})

module.exports = model('Brand', Brand);