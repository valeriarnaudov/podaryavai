// Middleware – защита на private routes (JWT)
const { verifyToken } = require("../../utils/jwt");
const userService = require("../users/user.service");

module.exports = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: "Unauthorized" });

    const token = header.split(" ")[1];
    const decoded = verifyToken(token);

    const user = await userService.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
