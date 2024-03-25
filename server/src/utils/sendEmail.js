const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const sendEmail = async (email) => {
  const token = jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: 6000,
  });
  const resetPasswordLink = `http://localhost:5173/resetpassword?token=${token}`;
  try {
    const transport = nodemailer.createTransport({
      host: process.env.HOST,
      port: 2525,
      auth: {
        user: process.env.USERHOST,
        pass: process.env.PASSWORD,
      },
    });
    await transport.sendMail({
      from: 'MakeMeMoney@gmail.com',
      to: email,
      subject: 'Reset Password',
      html: `<h1>Click on this link to reset your password</h1><a href="${resetPasswordLink}">Reset Password Link</a>`,
    });
    console.log('email send successufully');
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = sendEmail;
