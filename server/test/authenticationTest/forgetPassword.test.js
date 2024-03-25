const ForgetPasswordController = require('../../src/controllers/authentication/forgetPasswordController');
const User = require('../../src/models/User.schema');
const jwt = require('jsonwebtoken');

jest.mock('../../src/models/User.schema');
jest.mock('jsonwebtoken');

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it('should return 404 if no email is provided', async () => {
  const req = {
    body: {
      email: '',
    },
  };

  await ForgetPasswordController.forget(req, res);

  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({
    message: 'Please enter your registered email',
  });
});

it('should return 403 if no user found with the provided email', async () => {
  const req = {
    body: {
      email: 'faissal@gmail.com',
    },
  };

  User.findOne.mockReturnValue(null);

  await ForgetPasswordController.forget(req, res);

  expect(res.status).toHaveBeenCalledWith(403);
  expect(res.json).toHaveBeenCalledWith({
    message: 'No user found with this email.',
  });
});

it('should return 200 email is sent seccusefully', async () => {
  const req = {
    body: {
      email: 'faissal@gmail.com',
    },
  };

  User.findOne.mockReturnValue({ email: req.body.email });

  await ForgetPasswordController.forget(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({
    message:
      'Please check your email you will find a link to reset your password',
  });
});
