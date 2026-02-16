// Валидация на входни данни (пример)
const Joi = require("joi");

exports.registerSchema = Joi.object({
  fullName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().optional()
});

exports.personSchema = Joi.object({
  name: Joi.string().required(),
  occasion: Joi.string().required(),
  eventDate: Joi.date().required()
});
