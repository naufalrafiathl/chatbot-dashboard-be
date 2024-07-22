const jwt = require('jwt-simple');
const prisma = require('../models/prisma');
const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.decode(token, SECRET_KEY);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) throw new Error('Unauthorized');
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticateToken;
