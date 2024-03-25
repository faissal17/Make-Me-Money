const addProbleme = require('../../src/controllers/probleme/addProbleme.contoller');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cloudinary = require('../../src/utils/cloudinary');
const Probleme = require('../../src/models/Probleme.schema');
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

jest.mock('../../src/models/Probleme.schema', () => ({
  create: jest.fn(),
}));

describe('addProbleme', () => {
  let req, res;
  beforeEach(() => {
    req = {
      cookies: { token: 'mockToken' },
      body: {
        name: 'Test Probleme',
        description: 'Test description',
        website: 'http://example.com',
        tags: ['tag1', 'tag2'],
        feedback: 'Test feedback',
        status: 'urgent',
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
      'tags',
      'feedback',
      'status',
    ];

    for (const field of requiredFields) {
      const { [field]: omittedField, ...requestDataWithoutField } = req.body;
      const newReq = { ...req, body: requestDataWithoutField };

      await addProbleme(newReq, res);

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
    Probleme.create.mockResolvedValueOnce({
      _id: 'mockId',
      name: 'Test Probleme',
    });

    await addProbleme(req, res);

    expect(Probleme.create).toHaveBeenCalledWith({
      name: 'Test Probleme',
      description: 'Test description',
      image: 'mockImageUrl',
      website: 'http://example.com',
      tags: ['tag1', 'tag2'],
      feedback: 'Test feedback',
      status: 'urgent',
      user: 'mockUserId',
    });

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      status: 'success',
      message: 'Probleme created',
      probleme: { _id: 'mockId', name: 'Test Probleme' }, // Corrected: 'Test Probleme' instead of 'Test probleme'
    });

    expect(fs.unlinkSync).toHaveBeenCalled();
  });
});
