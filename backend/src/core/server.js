const app = require("./app");
const connectDB = require("../config/db");
const { port } = require("../config/env");

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
};

startServer();
