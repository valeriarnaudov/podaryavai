require("../config/db");
require("../config/redis");
require("./reminder.cron");
require("./reminder.worker");

console.log("Worker running...");
