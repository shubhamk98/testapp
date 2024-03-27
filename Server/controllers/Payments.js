import { instance } from "../config/Razorpay.js";
import Course from "../models/Course.js";
import User from "../models/User.js";
import {mailSender} from "../utils/mailSender.js";
import { courseEnrollmentEmail } from "../mail/CourseEnrollmentEmail.js";
import mongoose from "mongoose";

export const capturePayment = async (req, res) => {
  const { courseId } = req.body;
  const userId = req.user.id;

  if (!courseId) {
    return res.status(404).json({
      success: false,
      message: "Please provide valid course Id",
    });
  }
  let course;
  try {
    course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Could not find the course",
      });
    }

    const uid = new mongoose.Types.ObjectId(userId);

    if (course.studentsEnrolled.includes(uid)) {
      return res.status(404).json({
        success: false,
        message: "Already enrolled",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  const amount = course.price;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: Math.random(Date.now()).toString(),
    notes: {
      courseId,
      userId,
    },
  };

  try {
    const paymentResponse = await instance.orders.create(options);
    console.log(paymentResponse);

    return res.status(500).json({
      success: true,
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      thumbnail: course.thumbnail,
      orderId: paymentResponse.id,
      currency: paymentResponse.currency,
      amount: paymentResponse.amount,
      message: "Order is initiated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not initiate order" + error.message,
    });
  }
};

export const verifySignature = async (req, res) => {
  const webHookSecret = "fg";

  const signature = req.headers("x-razorpay-signature");

  const shasun = crypto.createHmac("sha256", webHookSecret);
  shasun.update(JSON.stringify(req.body));

  const digest = shasun.digest("hex");

  if (signature === digest) {
    console.log("Payement is authorised");

    const { courseId, userId } = req.body.payload.payment.entity.notes;

    try {
      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        {
          $push: {
            studentsEnrolled: userId,
          },
        },
        { new: true }
      );

      if (!enrolledCourse) {
        return res.status(500).json({
          success: false,
          message: "Course not found" + error.message,
        });
      }

      console.log(enrolledCourse);

      const enrolledStudent = await User.findOneAndUpdate(
        { _id: userId },
        {
          $push: {
            courses: courseId,
          },
        },
        { new: true }
      );

      console.log(enrolledStudent);

      const emailResponse = await mailSender(
        enrolledStudent.email,
        "Congratulations, you are enrolled",
        "padlo ab beta ji"
      );

      console.log(emailResponse);

      return res.status(200).json({
        success: true,
        message: "Signature verified and course added",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Could not initiate order" + error.message,
      });
    }
  } else {
    return res.status(404).json({
      success: false,
      message: "Could not match signature" + error.message,
    });
  }
};
