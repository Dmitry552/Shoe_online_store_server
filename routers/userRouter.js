const Router = require('express');
const router = new Router();
const {body} = require('express-validator');

const userController = require('../controllers/userController');

const authMiddelware = require('../middelware/authMiddelware');

router.post('/registration', 
  body('email').isEmail(),
  body('password').isLength({min: 3, max: 10}),
  userController.registration
); //Регистрация
router.post('/login', userController.login); //Авторизация
router.post('/logout', userController.logout); //Выход
router.get('/activate/:link', userController.activate); //Востановление доступа по ссылке
router.get('/refresh', userController.refresh); //Перезаписть токена

router.get('/users', authMiddelware, userController.users); //ТЕСТОВЫЙ Получение списка пользователей

module.exports = router;