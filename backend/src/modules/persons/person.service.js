// Business логика за Person
const Person = require("./person.model");

exports.create = (userId, data) => Person.create({ ...data, userId });

exports.getAll = (userId) =>
  Person.find({ userId }).sort({ eventDate: 1 });

exports.update = (userId, id, data) =>
  Person.findOneAndUpdate({ _id: id, userId }, data, { new: true });

exports.remove = (userId, id) =>
  Person.findOneAndDelete({ _id: id, userId });

exports.countByUser = (userId) =>
  Person.countDocuments({ userId });
