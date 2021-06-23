const jwt = require('jsonwebtoken');
const access_key = require('../config').ACCESS_SEKRET_KEY;
const refresh_key = require('../config').REFRESH_SEKRET_KEY;
const Token = require('../models/Token');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, access_key, {expiresIn: '30m'});
    const refreshToken = jwt.sign(payload, refresh_key, {expiresIn: '30d'});
    return {accessToken, refreshToken}
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, access_key)
      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, refresh_key);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({user: userId});
    if(tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await new Token({user: userId, refreshToken});
    await token.save();
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.deleteOne({refreshToken});
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({refreshToken});
    return tokenData;
  }
}

module.exports = new TokenService();