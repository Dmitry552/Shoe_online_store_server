const {Schema, model, ObjectId} = require('mongoose');

const Comment = new Schema({
  title: {type: String, require: true},
  text: {type: String, require: true},
  product: {type: ObjectId, ref: 'Product'},
  owner: {type: ObjectId, ref: 'User'},
  parent: {type: ObjectId, ref: 'Comment'},
  children: [{type: ObjectId, ref: 'Comment'}]
})

module.export = model('Comment', Comment);