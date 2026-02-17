const app = require("./app");
const connectDB = require("../config/db");
const { port } = require("../config/env");
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
};

startServer();
