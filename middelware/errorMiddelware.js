const errorService = require('../services/errorService');

module.exports = (err, req, res, next) => {
  if(err instanceof errorService) {
    return res.status(err.status).json({message: err.message, errors: err.errors});
  }
  return res.status(500).json({message: 'Непредвиденая ошибка!'});
}