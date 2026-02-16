// Person модел – хората, за които напомняме
const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    name: { type: String, required: true },
    relationship: String,
    occasion: { type: String, required: true },
    eventDate: { type: Date, required: true, index: true },

    giftBudget: { min: Number, max: Number },
    interests: [String],

    autoGift: {
      enabled: { type: Boolean, default: false },
      approved: { type: Boolean, default: false }
    },

    // за да не пращаме дублирани напомняния
    remindersSent: {
      type: Map,
      of: Boolean,
      default: {}
    }
  },
  { timestamps: true }
);

PersonSchema.index({ userId: 1, eventDate: 1 });
module.exports = mongoose.model("Person", PersonSchema);
