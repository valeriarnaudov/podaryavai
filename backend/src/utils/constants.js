module.exports = {
  ROLES: {
    USER: "user",
    ADMIN: "admin"
  },
  PLANS: {
    FREE: "free",
    PRO: "pro",
    ULTRA: "ultra"
  }
};

// Константи за планове и лимити
module.exports = {
  PLAN_LIMITS: {
    trial: { people: 2 },
    standard: { people: 2 },
    pro: { people: 15 },
    premium: { people: 50 },
    ultra: { people: 100 }
  }
};
