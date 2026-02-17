// User model – централният модел за auth, subscriptions и plans
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },

    plan: {
      type: String,
      enum: ["trial", "basic", "pro", "ultra"],
      default: "trial"
    },

    trialEndsAt: {
      type: Date
    },

    // Stripe
    stripeCustomerId: String,
    stripeSubscriptionId: String,

    // refresh tokens (за logout / multi-device)
    refreshTokens: [
      {
        token: String,
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.User || mongoose.model("User", UserSchema);


