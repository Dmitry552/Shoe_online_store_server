const nodemailer = require('nodemailer');
const config = require('../config');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: false,
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD
      }
    })
  }

  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: config.SMTP_USER,
        to,
        subject: 'Активация аккаунта' + config.API_URL,
        text: '',
        html:
          `
            <div>
              <h1>Для активации пройдите по ссылке:</h1>
              <a href="${link}">${link}</a>
            </div>
          `
      })
    } catch (error) {
      console.log('что-то пошло не так')
    }
  }
}

module.exports = new MailService();