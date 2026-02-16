// Auth routes – публични и защитени
const router = require("express").Router();
const ctrl = require("./auth.controller");
const auth = require("./auth.middleware");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.post("/refresh", ctrl.refresh);
router.post("/logout", auth, ctrl.logout);

module.exports = router;
