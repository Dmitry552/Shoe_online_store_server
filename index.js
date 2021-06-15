require('dotenv').config();
const config = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers');

PORT = config.PORT;
URL_BD = config.URL_BD;

const app = express();

router.use('./api', router);

const start = async () => {
  try {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('DB on started'));
    await mongoose.connect(String(URL_BD), {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen(PORT, () => console.log(`Сервер на порту ${PORT} запущен.`))
  } catch (error) {
    
  }
}

start();