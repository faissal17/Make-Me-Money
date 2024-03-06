const authController = require('../src/controllers/authentication/authController');
const User = require('../src/models/User.schema');
const bcryptjs = require('bcryptjs');
const hashPassword = require('../src/helpers/hashPassword');
jest.mock('../src/models/User.schema');
jest.mock('bcryptjs');

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it('should return status 400 if email is empty', async () => {
  const req = {
    body: {
      email: '',
      password: 'faissalfaissal',
    },
  };
  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: 'error',
    message: 'email or password are not allowed to be empty',
  });
});

it('should return status 400 if password is empty', async () => {
  const req = {
    body: {
      email: 'faissal@gmail.com',
      password: '',
    },
  };
  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: 'error',
    message: 'email or password are not allowed to be empty',
  });
});

it('should return 400 if No user found with this email.', async () => {
  const req = {
    body: {
      email: 'Cena@gmail.com',
      password: 'JhonCena',
    },
  };

  User.findOne.mockResolvedValue(null);

  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: 'error',
    message: 'No user found with this email.',
  });
});

it('should return 400 if password is incorrect', async () => {
  const req = {
    body: {
      email: 'kayle@gmail.com',
      password: 'IncorrectPassword',
    },
  };

  const mockedUser = { email: req.body.email, password: 'CorrectPasswordHash' };
  User.findOne.mockResolvedValue(mockedUser);
  bcryptjs.compare.mockResolvedValue(false);

  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: 'error',
    message: 'Incorrect password.',
  });
});
