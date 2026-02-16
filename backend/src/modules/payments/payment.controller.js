const paymentService = require("./payment.service");
const User = require("../auth/user.model");
const stripe = require("./stripe.config");

exports.checkout = async (req, res, next) => {
  try {
    const { priceId } = req.body;

    const session = await paymentService.createCheckoutSession(
      req.user,
      priceId
    );

    res.json({ url: session.url });
  } catch (e) {
    next(e);
  }
};

exports.webhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const user = await User.findOne({ email: session.customer_email });

    // TODO: можеш да map-неш priceId към plan
    user.plan = "pro"; 
    user.trialEndsAt = null;

    await user.save();
  }

  res.json({ received: true });
};
