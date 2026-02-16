// User модел – съхранява акаунти, план, роля и auth данни
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    phone: String,

    role: { type: String, enum: ["user", "admin"], default: "user" },
    plan: { type: String, enum: ["trial", "standard", "pro", "premium", "ultra"], default: "trial" },
    trialEndsAt: Date,

    refreshTokens: [{ token: String, createdAt: { type: Date, default: Date.now } }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
