const {Schema, model, ObjectId} = require('mongoose');

const Comment = new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  product: {type: ObjectId, ref: 'Product'},
  owner: {type: ObjectId, ref: 'User'},
  parent: {type: ObjectId, ref: 'Comment'},
  children: [{type: ObjectId, ref: 'Comment'}]
})

module.exports = model('Comment', Comment);