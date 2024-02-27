const authController = require("../src/controllers/authController");
const User = require("../src/models/User");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

jest.mock("../src/models/User");
jest.mock("bcryptjs");
jest.mock("jsonwebtoken");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it("should return status 400 if email is empty", async () => {
  const req = {
    body: {
      name: "",
      email: "faissalaoukacha@gmail.com",
      password: "faissalfaissal",
      role: "client",
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
      role: "client",
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
      role: "client",
    },
  };
  await authController.register(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "All fields are required",
  });
});

it("should return 400 if This email already exists", async () => {
  const req = {
    body: {
      name: "suarez",
      email: "inar@gmail.com",
      password: "aoukacha",
      role: "client",
    },
  };

  await User.findOne({ email: req.body.email });

  await authController.register(req, res);

  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "This email already exists",
  });
});
