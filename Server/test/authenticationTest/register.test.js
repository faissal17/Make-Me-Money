const authController = require("../../src/controllers/authentication/authController");
const User = require("../../src/models/User.schema");

jest.mock("../../src/models/User.schema");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it("should return status 400 if name is empty", async () => {
  const req = {
    body: {
      name: "",
      email: "faissalaoukacha@gmail.com",
      password: "faissalfaissal",
    },
  };
  await authController.register(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "All fields are required",
  });
});

it("should return status 400 if email is empty", async () => {
  const req = {
    body: {
      name: "faissal",
      email: "",
      password: "faissalfaissal",
    },
  };
  await authController.register(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "All fields are required",
  });
});

it("should return status 400 if password is empty", async () => {
  const req = {
    body: {
      name: "faissal",
      email: "faissalaoukacha@gmail.com",
      password: "",
    },
  };
  await authController.register(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "All fields are required",
  });
});

it("should return 400 if email already exists", async () => {
  User.findOne.mockReturnValue(Promise.resolve({ email: "inar@gmail.com" }));

  const req = {
    body: {
      name: "suarez",
      email: "inar@gmail.com",
      password: "aoukacha",
    },
  };

  await authController.register(req, res);

  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "This email already exists",
  });
});