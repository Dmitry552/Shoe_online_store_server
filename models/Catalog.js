const {Schema, model, ObjectId} = require('mongoose');

const Catalog = new Schema({
  name: {type: String, required: true},
  children: [{type: ObjectId, ref: 'Catalog'}],
  product: [{type: ObjectId, ref: 'Product'}],
  parent: {type: ObjectId, ref: 'Catalog'}
})

module.exports = model('Catalog', Catalog);