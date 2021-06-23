const {Schema, model, ObjectId} = require('mongoose');

const User = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  isActivated: {type: Boolean, default: false}, //Подтвердит пользователь почту или нет
  activatedLink: {type: String}, //Сылка для активации
  role: {type: String, default: 'USER'},
  name: {type: String},
  surname: {type: String},
  patronymic: {type: String},
  gender: {type: String},
  bithday: {type: Date},
  phone: {type: Number},
  address: {type: String},
  ban: {type: Boolean, default: false},
  avatar: {type: String},
  date: {type: Date, default: Date.now()},
  comment: [{type: ObjectId, ref: 'Comment'}],
  fileComment:[{type: ObjectId, ref: 'FileComment'}],
  comparison: {type: ObjectId, ref: 'Comparison'},
  preferences: {type: ObjectId, ref: 'Preferences'},
  rating: [{type: ObjectId, ref: 'Rating'}],
  fileProduct:[{type: ObjectId, ref: 'fileProduct'}],
  ban:{type: ObjectId, ref: 'Ban'},
  basket:[{type: ObjectId, ref: 'Basket'}],
})

module.exports = model('User', User);