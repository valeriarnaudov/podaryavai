const reminderQueue = require("../queues/reminder.queue");

reminderQueue.process(async (job) => {
  console.log("Processing reminder job:", job.data);
  // later ще добавим email/sms logic
});
