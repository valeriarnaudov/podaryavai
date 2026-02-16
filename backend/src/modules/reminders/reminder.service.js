// Reminder бизнес логика – проверява кои събития предстоят
const Person = require("../persons/person.model");

const DAYS_BEFORE = [10, 7, 3];

exports.findUpcomingEvents = async () => {
  const today = new Date();
  const maxCheckDate = new Date();
  maxCheckDate.setDate(today.getDate() + 10);

  const persons = await Person.find({
    eventDate: { $gte: today, $lte: maxCheckDate }
  }).populate("userId");

  return persons.filter(person => {
    const diff = Math.ceil(
      (person.eventDate - today) / (1000 * 60 * 60 * 24)
    );

    return DAYS_BEFORE.includes(diff) &&
           !person.remindersSent.get(String(diff));
  });
};

exports.markReminderSent = async (person, daysBefore) => {
  person.remindersSent.set(String(daysBefore), true);
  await person.save();
};
