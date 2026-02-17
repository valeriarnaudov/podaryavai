const router = require("express").Router();
const auth = require("../auth/auth.middleware");
const ctrl = require("./payment.controller");
const bodyParser = require("body-parser");

// Protected checkout route
router.post("/checkout", auth, ctrl.checkout);

// Webhook route (raw body!)
router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  ctrl.webhook
);

router.post(
  "/create-checkout-session",
  auth,
  ctrl.createCheckoutSession
);

module.exports = router;
