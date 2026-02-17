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

// payment.controller.js
exports.createCheckoutSession = async (req, res, next) => {
  try {
    const { plan } = req.body;

    // тук map-ваш plan -> Stripe priceId
    const priceId = mapPlanToPriceId(plan);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: req.user.email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/pricing`
    });

    // 👉 ТОВА Е ОТГОВОРЪТ, КОЙТО ПИТАШ
    res.json({ url: session.url });

  } catch (err) {
    next(err);
  }
};
