const config = require('./config');
const express = require('express');

PORT = config.PORT;

const app = express();

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Сервер на порту ${PORT} запущен.`))
  } catch (error) {
    
  }
}

start();