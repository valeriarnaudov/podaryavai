const cron = require("node-cron");

cron.schedule("0 0 * * *", async () => {
  console.log("Running daily reminder check...");
  // тук по-късно ще търсим upcoming events
});
