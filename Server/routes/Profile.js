import express from "express";
import { auth, isInstructor } from "../middleware/Auth.js";
import {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  getEnrolledCourses,
  updateDisplayPicture,
  instructorDashboard,
} from "../controllers/Profile.js";

const router = express.Router();

// Profile routes
router.delete("/deleteProfile", auth, deleteAccount); // Delete User Account
router.put("/updateProfile", auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);
router.get("/getEnrolledCourses", auth, getEnrolledCourses); // Get Enrolled Courses
router.put("/updateDisplayPicture", auth, updateDisplayPicture);
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard);

export default router;
