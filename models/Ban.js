const {Schema, model, ObjectId} = require('mongoose');

const Ban = new Schema({
  user: [{type: ObjectId, ref: 'User'}],
  owner: {type: ObjectId, ref: 'User'},
  title: {type: String, default: ''}
})

module.export = model('Ban', Ban);