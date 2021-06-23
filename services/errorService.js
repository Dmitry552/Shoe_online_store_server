
module.exports = class ErrorService extends Error {

  constructor(status, message, errors=[]) {
    super(message)
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ErrorService(401, 'пользователь не авторизован!')
  }

  static BadRequest(message, errors = []) {
    return new ErrorService(400, message, errors)
  }
}