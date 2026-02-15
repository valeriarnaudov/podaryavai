const connectDB = require("../config/db");
const app = require("./app");
require("../config/redis");

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("API running...");
});
