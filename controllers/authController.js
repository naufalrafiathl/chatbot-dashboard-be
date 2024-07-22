const authService = require('../services/authService');

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await authService.register(email, password);
    res.json({ user });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (err) {
    next(err);
    console.log("errrrr",err)
    return err.message
  }
};

module.exports = { register, login };
