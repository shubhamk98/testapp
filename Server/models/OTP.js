import mongoose from "mongoose";
import { mailSender } from "../utils/mailSender.js";
import emailTemplate from "../mail/EmailVerificationTemp.js"

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

const sendVerificationEmail = async (email, otp) => {
  try {
    const mailResponse = await mailSender(email, "Verification Email from StudyNotion", emailTemplate(otp));
    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occured while sending mail: ", error);
    throw error;
  }
};

OTPSchema.pre("save", async function (next) {
  await sendVerificationEmail(this.email, this.otp);
  next();
});

export default mongoose.model("OTP", OTPSchema);
