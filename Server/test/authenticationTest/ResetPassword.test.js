const ResetPassworController = require('../../src/controllers/authentication/ResetPasswordController');
const User = require('../../src/models/User.schema');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

jest.mock('../../src/models/User.schema');
jest.mock('jsonwebtoken');

describe('ResetPasswordController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      query: {
        token: 'faissalaoukacha',
      },
      body: {
        password: 'faissalaoukacha123',
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    jwt.verify = jest.fn().mockReturnValue({ email: 'kevindebruyn@gmail.com' });

    bcryptjs.genSalt = jest.fn().mockResolvedValue('mockedSalt');
    bcryptjs.hash = jest.fn().mockResolvedValue('hashedPassword123');

    User.updateOne = jest.fn().mockResolvedValue({});

    jest.clearAllMocks();
  });

  it('should reset password successfully', async () => {
    await ResetPassworController.resetPassword(req, res);

    expect(jwt.verify).toHaveBeenCalledWith(
      'faissalaoukacha',
      process.env.SECRET_KEY,
    );
    expect(bcryptjs.genSalt).toHaveBeenCalledWith(10);
    expect(bcryptjs.hash).toHaveBeenCalledWith('faissalaoukacha123', 'mockedSalt');
    expect(User.updateOne).toHaveBeenCalledWith(
      { email: 'kevindebruyn@gmail.com' },
      { password: 'hashedPassword123' },
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: 'Password reset successfully',
    });
  });
  it('should return error for other errors', async () => {
    User.updateOne.mockRejectedValue(new Error('DatabaseError'));

    await ResetPassworController.resetPassword(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Invalid or expired token.',
    });
  });
});
