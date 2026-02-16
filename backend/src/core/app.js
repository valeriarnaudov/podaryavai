const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");

const errorMiddleware = require("../middlewares/error.middleware");

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use(errorMiddleware);

// добави под auth routes
const personRoutes = require("../modules/persons/person.routes");
app.use("/api/persons", personRoutes);

const paymentRoutes = require("../modules/payments/payment.routes");

app.use("/api/payments", paymentRoutes);


module.exports = app;

