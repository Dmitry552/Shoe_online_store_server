const errorService = require('../services/errorService');
const tokenService = require('../services/tokenService');

module.exports = (req, res, next) => {
  try {
    const authorirationHeader = req.headers.authorization;
    if(!authorirationHeader) {
      return next(errorService.UnauthorizedError())
    }
    const accessToken = authorirationHeader.split(' ')[1];
    if(!accessToken) {
      return next(errorService.UnauthorizedError())
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if(!userData) {
      return next(errorService.UnauthorizedError())
    }
    req.user = userData;
    next();
  } catch (error) {
    return next(errorService.UnauthorizedError())
  }
}