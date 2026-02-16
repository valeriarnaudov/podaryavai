// Email service – засега е mock, по-късно ще вържем SendGrid / SMTP
exports.sendReminder = async (to, name, occasion, daysLeft) => {
  console.log(`
  Reminder:
  To: ${to}
  ${occasion} for ${name} is in ${daysLeft} days.
  `);
};
