require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  URL_BD: process.env.URL_BD || 'mongodb+srv://dbUser:Dima123456789@store.kfhd5.mongodb.net/Store?retryWrites=true&w=majority',
  ACCESS_SEKRET_KEY: process.env.ACCESS_SECRET_KEY || 'n3480VN83T03TCHBN97bt65VBR75R867',
  REFRESH_SEKRET_KEY: process.env.REFRESH_SEKRET_KEY || '6B786t78bt8776TBB7RFyv3TCHBN967',
  SMTP_HOST: 'smtp.gmail.com',
  SMTP_PORT: 587,
  SMTP_USER: 'nodemaill552@gmail.com',
  SMTP_PASSWORD: 'Dima12345Dima',
  API_URL: 'http://localhost:5000',
  CLIENT_URL: 'http://localhost:3000'
}