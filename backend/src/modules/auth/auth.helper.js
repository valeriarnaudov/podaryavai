// Помощни функции за auth
const User = require("../users/user.model");

exports.findUserByRefresh = async (token) => {
  return User.findOne({ "refreshTokens.token": token });
};
