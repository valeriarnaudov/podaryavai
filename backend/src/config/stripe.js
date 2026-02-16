const Stripe = require("stripe");
const { stripeSecret } = require("./env");

const stripe = new Stripe(stripeSecret);

module.exports = stripe;
