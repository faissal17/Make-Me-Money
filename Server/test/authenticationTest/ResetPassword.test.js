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
        token: 'valid_token', // Assuming you have a valid token for testing
      },
      body: {
        password: 'newPassword123', // Assuming this is the new password provided
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock jwt.verify method to return a valid decoded token
    jwt.verify = jest.fn().mockReturnValue({ email: 'test@example.com' });

    // Mock bcryptjs.genSalt and bcryptjs.hash methods
    bcryptjs.genSalt = jest.fn().mockResolvedValue('mockedSalt');
    bcryptjs.hash = jest.fn().mockResolvedValue('hashedPassword123');

    // Mock User.updateOne method
    User.updateOne = jest.fn().mockResolvedValue({});

    // Clear mocks
    jest.clearAllMocks();
  });

  it('should reset password successfully', async () => {
    await ResetPassworController.resetPassword(req, res);

    expect(jwt.verify).toHaveBeenCalledWith(
      'valid_token',
      process.env.SECRET_KEY,
    );
    expect(bcryptjs.genSalt).toHaveBeenCalledWith(10);
    expect(bcryptjs.hash).toHaveBeenCalledWith('newPassword123', 'mockedSalt');
    expect(User.updateOne).toHaveBeenCalledWith(
      { email: 'test@example.com' },
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
