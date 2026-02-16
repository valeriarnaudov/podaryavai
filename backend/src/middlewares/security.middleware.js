// Общи security настройки – headers, basic protections
const helmet = require("helmet");

module.exports = (app) => {
  app.use(helmet());
};
