const sendSMS = async (to, message) => {
  console.log(`📱 Sending SMS to ${to}`);
  // later: Twilio integration
};

module.exports = { sendSMS };
