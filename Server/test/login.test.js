const authController = require("../src/controllers/authController");
const User = require("../src/models/User");
const bcryptjs = require("bcryptjs");

jest.mock("../src/models/User");
jest.mock("bcryptjs");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it("should return status 400 if email is empty", async () => {
  const req = {
    body: {
      email: "",
      password: "faissalfaissal",
    },
  };
  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "email or password are not allowed to be empty",
  });
});

it("should return status 400 if password is empty ", async () => {
  const req = {
    body: {
      email: "faissal@gmail.com",
      password: "",
    },
  };
  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "email or password are not allowed to be empty",
  });
});

it("should return 400 if No user found with this email.", async () => {
  const req = {
    body: {
      email: "Cena@gmail.com",
      password: "JhonCena",
    },
  };

  await User.findOne({ email: req.body.email });

  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "No user found with this email.",
  });
});

it("should return 400 if password is inccorect", async () => {
  const req = {
    body: {
      email: "kayle@gmail.com",
      password: "JhonCena",
    },
  };
  await User.findOne({ email: req.body.email, password: req.body.password });

  await bcryptjs.compare(req.body.password, User.password);

  await authController.login(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalledWith({
    status: "error",
    message: "No user found with this email.",
  });
});

// it("should return 200 if user logged in", async () => {
//   const req = {
//     body: {
//       email: "inar@gmail.com",
//       password: "aoukacha",
//     },
//   };
//   const user = await User.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });

//   await bcryptjs.compare(req.body.password, user.password);

//   await authController.login(req, res);
//   expect(res.status).toHaveBeenCalledWith(200);
//   expect(res.json).toHaveBeenCalledWith({
//     status: "succes",
//     message: "Login successful",
//   });
// });
