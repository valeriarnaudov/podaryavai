// HTTP слой за Person
const service = require("./person.service");

exports.create = async (req, res, next) => {
  try {
    const person = await service.create(req.user._id, req.body);
    res.status(201).json(person);
  } catch (e) { next(e); }
};

exports.getAll = async (req, res, next) => {
  try {
    res.json(await service.getAll(req.user._id));
  } catch (e) { next(e); }
};

exports.update = async (req, res, next) => {
  try {
    res.json(await service.update(req.user._id, req.params.id, req.body));
  } catch (e) { next(e); }
};

exports.remove = async (req, res, next) => {
  try {
    await service.remove(req.user._id, req.params.id);
    res.json({ message: "Deleted" });
  } catch (e) { next(e); }
};
