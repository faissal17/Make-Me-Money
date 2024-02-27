const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const SendActivateEmail = async (email) => {
  const token = jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: 600,
  });
  const ActivateEmail = `http://localhost:5173/activeEmail?token=${token}`;
  try {
    const transport = nodemailer.createTransport({
      host: process.env.HOST,
      port: 2525,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });
    await transport.sendMail({
      from: "AlloMedia@gmail.com",
      to: email,
      subject: "Activate Email",
      html: `<h1>Click On this link to activate email</h1><a href="${ActivateEmail}">Activate Email Link</a>`,
    });
    console.log("email send successufully");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = SendActivateEmail;
