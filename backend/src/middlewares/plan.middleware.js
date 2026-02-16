// Проверки за trial и лимити по план
const { PLAN_LIMITS } = require("../utils/constants");
const personService = require("../modules/persons/person.service");

exports.checkTrial = (req, res, next) => {
  const { plan, trialEndsAt } = req.user;
  if (plan === "trial" && trialEndsAt && new Date() > trialEndsAt) {
    return res.status(403).json({ message: "Trial expired. Upgrade required." });
  }
  next();
};

exports.checkPeopleLimit = async (req, res, next) => {
  const limit = PLAN_LIMITS[req.user.plan]?.people ?? 0;
  const count = await personService.countByUser(req.user._id);
  if (count >= limit) {
    return res.status(403).json({ message: "Plan limit reached. Upgrade required." });
  }
  next();
};
