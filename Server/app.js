const express = require('express');
const authRouter = require('./src/routes/auth');
const dotenv = require('dotenv');
const mongoose = require('./src/database/connection');
const bodyParser = require('body-parser');
const forgetPassRouter = require('./src/routes/forgetPassword');
const resetPassword = require('./src/routes/ResetPassword');
const ActiveEmail = require('./src/routes/ActiveEmail');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
app.use('/api/auth', forgetPassRouter);
app.use('/api/auth', resetPassword);
app.use('/api/auth', ActiveEmail);

app.get('/', (req, res) => {
  res.send('hey');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`));
