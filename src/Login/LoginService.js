const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { FindUserByEmail } = require("./LoginRepo");

dotenv.config();

const SecretKey = process.env.KEY;

const Login = async (email, password) => {
  const user = await FindUserByEmail(email);

  if (!user) {
    return ("invalid email");
  }

  const ValidPassword = await bcrypt.compare(password, user.password);
  if (!ValidPassword) {
    return ("Invalid Password");
  }

  const token = jwt.sign(
    { namaUser: user.name, Email: user.email },
    SecretKey,
    { expiresIn: "1d" }
  );

  return {
    NamaUser: user.name,
    Email: user.email,
    token: token,
  };
};

module.exports = { Login };
