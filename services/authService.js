const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');
const prisma = require('../models/prisma');
const SECRET_KEY = process.env.SECRET_KEY;

const register = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });
  return user;
};

const login = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.encode({ id: user.id }, SECRET_KEY);
  return token;
};

module.exports = { register, login };
