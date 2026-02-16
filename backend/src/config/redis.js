const Redis = require("ioredis");
const { redisUrl } = require("./env");

const redis = new Redis(redisUrl);

redis.on("connect", () => console.log("✅ Redis connected"));
redis.on("error", (err) => console.error("❌ Redis error:", err));

module.exports = redis;
