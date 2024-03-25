const addExperience = require('../../src/controllers/experience/addExperience.controller');
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

describe('addExperience', () => {
  let req, res;

  beforeEach(() => {
    req = {
      cookies: { token: 'mockToken' },
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

  it('should return 400 if required fields are missing', async () => {
    const requiredFields = [
      'name',
      'description',
      'website',
      'earning',
      'tags',
      'location',
      'feedback',
      'status',
    ];

    for (const field of requiredFields) {
      const { [field]: omittedField, ...requestDataWithoutField } = req.body;
      const newReq = { ...req, body: requestDataWithoutField };

      await addExperience(newReq, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        status: 'error',
        message: 'All fields are required',
      });
      expect(fs.unlinkSync).toHaveBeenCalled();
    }
  });

  it('should successfully create an experience', async () => {
    cloudinary.uploader.upload.mockResolvedValueOnce({
      secure_url: 'mockImageUrl',
    });
    Experience.create.mockResolvedValueOnce({
      _id: 'mockId',
      name: 'Test Experience',
    });

    await addExperience(req, res);

    expect(Experience.create).toHaveBeenCalledWith({
      name: 'Test Experience',
      description: 'Test description',
      image: 'mockImageUrl',
      website: 'http://example.com',
      earning: 100,
      tags: ['tag1', 'tag2'],
      location: 'Test location',
      feedback: 'Test feedback',
      status: 'active',
      user: 'mockUserId',
    });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      status: 'success',
      message: 'Experience created',
      experience: { _id: 'mockId', name: 'Test Experience' },
    });
    expect(fs.unlinkSync).toHaveBeenCalled();
  });
});
