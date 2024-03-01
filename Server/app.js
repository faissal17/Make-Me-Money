const express = require('express');
const authRouter = require('./src/routes/authenticationRoutes/auth');
const dotenv = require('dotenv');
const mongoose = require('./src/database/connection');
const bodyParser = require('body-parser');
const forgetPassRouter = require('./src/routes/authenticationRoutes/forgetPassword');
const resetPassword = require('./src/routes/authenticationRoutes/ResetPassword');
const ActiveEmail = require('./src/routes/authenticationRoutes/ActiveEmail');
const experienceRoutes = require('./src/routes/experienceRoutes/experience.routes');
const problemeRoutes = require('./src/routes/problemeRoutes/probleme.routes');
const projectRoutes = require('./src/routes/projectRoutes/project.routes');

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

app.use('/experince', experienceRoutes);

app.use('/probleme', problemeRoutes);

app.use('/project', projectRoutes);

app.get('/', (req, res) => {
  res.send('hey');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`));
