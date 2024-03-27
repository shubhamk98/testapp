import express from "express"; // Import express and Router type
const router = express.Router(); // Create a router instance

import {
  createCourse,
  showAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse
} from "../controllers/Course.js"; // Import Course controllers
import {
  createCategory,
  categoryPageDetails,
  showAllCategory,
} from "../controllers/Category.js"; // Import Category controllers
import {
  createSection,
  updateSection,
  deleteSection,
} from "../controllers/Sections.js"; // Import Section controllers
import {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} from "../controllers/subSection.js"; // Import Subsection controllers
import {
  createRating,
  getAverageRating,
  getAllRating,
} from "../controllers/RatingAndReview.js"; // Import Rating controllers
import { auth, isInstructor, isStudent, isAdmin } from "../middleware/Auth.js"; // Import Middleware
// import { updateCourseProgress } from "../controllers/"; // Import updateCourseProgress controller

// Course routes (only by Instructors)
router.post("/createCourse", auth, isInstructor, createCourse); // Courses can Only be Created by Instructors
router.post("/addSection", auth, isInstructor, createSection); // Add a Section to a Course
router.post("/updateSection", auth, isInstructor, updateSection); // Update a Section
router.post("/deleteSection", auth, isInstructor, deleteSection); // Delete a Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection); // Edit Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.get("/getAllCourses", showAllCourses); // Get all Registered Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails);

router.post("/getCourseDetails", getCourseDetails); // Get Details for a Specific Courses by ID
router.post("/editCourse", auth, isInstructor, editCourse); // Edit Course routes
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses); // Get all Courses Under a Specific Instructor
router.delete("/deleteCourse", deleteCourse); // Delete a Course
// router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

// Category routes (Only by Admin)
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategory);
router.post("/getCategoryPageDetails", categoryPageDetails);

// Rating and Review (only by Student)
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

export default router; // Export the router
