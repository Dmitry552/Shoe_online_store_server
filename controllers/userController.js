const config= require('../config');
const userService = require('../services/userService');
const {validationResult} = require('express-validator');
const errorService = require('../services/errorService');

class UserController {
  async registration(req, res, next) { //Регистрация
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return next(errorService.BadRequest('Ошибка при валидации', errors.array()))
      }
      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) { //Авторизация
    try {
      const {email, password} = req.body;
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
      return res.json(userData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async logout(req, res, next) { //Выход с аккаунта
    try {
      const {refreshToken} = req.cookies;
      
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }  

  async activate(req, res, next) { //Активация аккаунта по ссылке
    try {
      const activationLink = req.params.link; 
      await userService.activate(activationLink);
      return res.redirect(config.CLIENT_URL);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async refresh(req, res, next) { //Перезапись токена
    try {
      const {refreshToken} = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
      return res.json(userData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async users(req, res) { //ТЕСТОВЫЙ Получение списка пользователей
    try {
      const users =  await userService.getAllUsers();
      return res.json(users)
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new UserController();