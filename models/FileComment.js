const {Schema, model, ObjectId} = require('mongoose');

const FileComment = new Schema({
  owner: {type: ObjectId, ref: 'User'},
  comment: {type: ObjectId, ref: 'Comment'},
  type: {type: String, require: true},
  name: {type: String, require: true},
  path: {type: String, default: ''},
  date: {type: Date, default: Date.now()}, 
  size: {type: Number, default: 0}
})

module.export = model('FileComment', FileComment);