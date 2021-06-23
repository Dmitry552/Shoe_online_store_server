const {Schema, model, ObjectId} = require('mongoose');

const Preferences = new Schema({
  user: {type: ObjectId, ref: 'User'},
  product: [{type: ObjectId, ref: 'Product'}]
})

module.exports = model('Preferences', Preferences);