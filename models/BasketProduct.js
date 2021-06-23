const {Schema, model, ObjectId} = require('mongoose');

const BasketProduct = new Schema({
  basket: {type: ObjectId, ref: 'Basket'},
  product: [{type: ObjectId, ref: 'Product'}]
})

module.exports = model('BasketProduct', BasketProduct);