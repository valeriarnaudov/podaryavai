const express = require("express");
const compression = require("compression");
const morgan = require("morgan");

const security = require("../middlewares/security.middleware");
const corsMw = require("../middlewares/cors.middleware");
const rateLimitMw = require("../middlewares/rateLimit.middleware");
const errorMiddleware = require("../middlewares/error.middleware");

const app = express();

security(app);
app.use(corsMw);
app.use(rateLimitMw);
app.use(compression());
app.use(express.json());
app.use(morgan("combined"));

app.get("/health", (req, res) => res.json({ status: "OK" }));

app.use(errorMiddleware);

const paymentRoutes = require("../modules/payments/payment.routes");
app.use("/api/payments", paymentRoutes);

module.exports = app;
