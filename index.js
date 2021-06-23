require('dotenv').config();
const config = require('./config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./routers');
const errorMiddelware = require('./middelware/errorMiddelware');

PORT = config.PORT;
URL_BD = config.URL_BD;

const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use('/api', router);

app.use(errorMiddelware)

const start = async () => {
  try {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('DB on started'));
    await mongoose.connect(String(URL_BD), {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen(PORT, () => console.log(`Сервер на порту ${PORT} запущен.`))
  } catch (error) {
    console.log(error)
  }
}

start();