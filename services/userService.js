const User = require('../models/User');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('../config');

const mailService = require('./mailService');
const tokenService = require('./tokenService');
const errorService = require('./errorService');
const Token = require('../models/Token');

class UserService {
  async registration(email, password) {
    const candidate = await User.findOne({email});
    if(candidate) {
      throw errorService.BadRequest(`Пользователь ${email} существует!`)
    }
    const activatedLink = uuid.v4();
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await new User({email, password: hashPassword, activatedLink});
    await user.save();
    await mailService.sendActivationMail(email, `${config.API_URL}/api/user/activate/${activatedLink}`);
    const tokens = tokenService.generateToken({id: user._id, email: user.email, isActivated: user.isActivated});
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return {
      ...tokens,
      user: {
        id: user._id,
        email: user.email,
        isActivated: user.isActivated
      }
    }
  }

  async activate(activatedLink) {
    const user = await User.findOne({activatedLink});
    if(!user) {
      throw errorService.BadRequest('Неккоректная ссылка активации!')
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({email})
    if(!user) {
      throw errorService.BadRequest('Пользователь с таким email не найден!')
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if(!isPassEquals) {
      throw errorService.BadRequest('Неверный пароль!')
    }
    const tokens = tokenService.generateToken({id: user._id, email: user.email, isActivated: user.isActivated});
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return {
      ...tokens,
      user: {
        id: user._id,
        email: user.email,
        isActivated: user.isActivated
      }
    }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if(!refreshToken) {
      throw errorService.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if(!userData || !tokenFromDb) {
      throw errorService.UnauthorizedError();
    }
    const user = await User.findById(userData.id);
    const tokens = tokenService.generateToken({user: user._id, email: user.email, isActivated: user.isActivated});
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return {
      ...tokens,
      user: {
        id: user._id,
        email: user.email,
        isActivated: user.isActivated
      }
    }
  }

  async getAllUsers() {
    const users = await User.find();
    return users;
  }
}

module.exports = new UserService();