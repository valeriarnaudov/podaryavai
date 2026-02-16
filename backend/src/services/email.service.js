const sendEmail = async (to, subject, text) => {
  console.log(`📧 Sending email to ${to}`);
  // later: nodemailer / resend
};

module.exports = { sendEmail };
