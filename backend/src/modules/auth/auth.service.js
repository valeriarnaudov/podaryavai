// Auth service – регистрация, login, refresh, logout
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { generateToken } = require("../../utils/jwt");
const userService = require("../users/user.service");

exports.register = async ({ fullName, email, password, phone }) => {
  const exists = await userService.findByEmail(email);
  if (exists) throw new Error("Email already exists");

  const hashed = await bcrypt.hash(password, 12);

  return userService.create({
    fullName,
    email,
    phone,
    password: hashed,
    trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
  });
};

exports.login = async (email, password) => {
  const user = await userService.findByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Invalid credentials");

  const accessToken = generateToken({ id: user._id, role: user.role, plan: user.plan });
  const refreshToken = crypto.randomBytes(64).toString("hex");

  user.refreshTokens.push({ token: refreshToken });
  await userService.save(user);

  return { user, accessToken, refreshToken };
};

exports.refresh = async (refreshToken) => {
  const user = await userService.findByEmail(
    (await require("./auth.helper").findUserByRefresh(refreshToken))?.email
  );
  if (!user) throw new Error("Invalid refresh token");

  user.refreshTokens = user.refreshTokens.filter(rt => rt.token !== refreshToken);
  const newRefresh = crypto.randomBytes(64).toString("hex");
  user.refreshTokens.push({ token: newRefresh });
  await userService.save(user);

  const accessToken = generateToken({ id: user._id, role: user.role, plan: user.plan });
  return { accessToken, refreshToken: newRefresh };
};

exports.logout = async (user, refreshToken) => {
  user.refreshTokens = user.refreshTokens.filter(rt => rt.token !== refreshToken);
  await userService.save(user);
};
