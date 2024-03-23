const updateExperience = require('../../src/controllers/experience/updateExperience.controller');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cloudinary = require('../../src/utils/cloudinary');
const Experience = require('../../src/models/Experience.schema');

jest.mock('jsonwebtoken', () => ({
  verify: jest.fn(() => ({ id: 'mockUserId' })),
}));

jest.mock('fs', () => ({
  unlinkSync: jest.fn(),
}));

jest.mock('../../src/utils/cloudinary', () => ({
  uploader: {
    upload: jest.fn(),
  },
}));

jest.mock('../../src/models/Experience.schema', () => ({
  create: jest.fn(),
}));

describe('updateExperience', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      params: {
        id: 'id',
      },
      cookies: { token: 'token' },
      body: {
        name: 'Test Experience',
        description: 'Test description',
        website: 'http://example.com',
        earning: 100,
        tags: ['tag1', 'tag2'],
        location: 'Test location',
        feedback: 'Test feedback',
        status: 'active',
      },
      file: { path: 'test/image/path.jpg' },
    };

    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should update experience successfully', async () => {
    await updateExperience(req, res);

    expect(jwt.verify).toHaveBeenCalledWith('token', process.env.SECRET_KEY);
    expect(Experience.findById).toHaveBeenCalledWith('id');
    expect(cloudinary.uploader.upload).toHaveBeenCalledWith(
      'valid_image_path',
      { folder: 'MMM' },
    );
    expect(fs.unlinkSync).toHaveBeenCalledWith('valid_image_path');
    expect(Experience.findByIdAndUpdate).toHaveBeenCalledWith(
      'id',
      {
        name: 'Updated Experience',
        description: 'Updated description',
        website: 'https://updatedwebsite.com',
        earning: 100,
        tags: ['tag1', 'tag2'],
        location: 'Updated Location',
        feedback: 'Updated Feedback',
        status: 'Updated Status',
        image: 'valid_secure_url',
      },
      { new: true, runValidators: true },
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Experience updated',
      updateExperience: expect.any(Object),
    });
  });
});
