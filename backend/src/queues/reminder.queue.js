const Queue = require("bull");
const redis = require("../config/redis");

const reminderQueue = new Queue("reminderQueue", {
  createClient: () => redis
});

module.exports = reminderQueue;
