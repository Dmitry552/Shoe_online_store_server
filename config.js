require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  URL_BD: process.env.URL_BD || 'mongodb+srv://dbUser:Dima123456789@store.kfhd5.mongodb.net/Store?retryWrites=true&w=majority'
}