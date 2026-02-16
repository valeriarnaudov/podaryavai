// User service – базови операции с потребители
const User = require("./user.model");

exports.findByEmail = (email) => User.findOne({ email });
exports.findById = (id) => User.findById(id);
exports.create = (data) => User.create(data);
exports.save = (user) => user.save();
