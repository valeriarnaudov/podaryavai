// Worker – стартира се отделно от app.js
// Проверява всеки ден за предстоящи събития

const cron = require("node-cron");
const reminderService = require("./reminder.service");
const emailService = require("../services/email.service");

cron.schedule("0 9 * * *", async () => {
  console.log("Running daily reminder job...");

  const events = await reminderService.findUpcomingEvents();

  for (const person of events) {
    const today = new Date();
    const diff = Math.ceil(
      (person.eventDate - today) / (1000 * 60 * 60 * 24)
    );

    await emailService.sendReminder(
      person.userId.email,
      person.name,
      person.occasion,
      diff
    );

    // Ultra auto gift trigger
    if (
      person.userId.plan === "ultra" &&
      person.autoGift.enabled &&
      person.autoGift.approved &&
      diff === 3
    ) {
      console.log("Triggering Ultra concierge flow...");
      // Тук по-късно ще вържем payment + order service
    }

    await reminderService.markReminderSent(person, diff);
  }
});
