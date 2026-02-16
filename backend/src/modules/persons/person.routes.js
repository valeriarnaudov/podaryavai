// Routes за Person (protected)
const router = require("express").Router();
const auth = require("../auth/auth.middleware");
const { checkTrial, checkPeopleLimit } = require("../../middlewares/plan.middleware");
const ctrl = require("./person.controller");

router.use(auth);
router.use(checkTrial);

router.post("/", checkPeopleLimit, ctrl.create);
router.get("/", ctrl.getAll);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router;
