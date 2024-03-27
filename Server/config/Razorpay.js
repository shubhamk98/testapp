import Razarpay from "razorpay";

export const instance = new Razarpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

