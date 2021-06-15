const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


class userController {
  async registration(req, res) {
    try {
      const {email, password} = req.body;
      if(!email || !password) {
        return res.status(400).json({message: 'Поля должны быть заполнены!'})
      }
    } catch (error) {
      console.log(error);
      res.send({message: 'Server error'});
    }
  }
}

module.exports = new userController();