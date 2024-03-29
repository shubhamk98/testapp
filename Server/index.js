// Import statements for modules
import express from "express";
import userRoutes from "./routes/User.js";
import profileRoutes from "./routes/Profile.js";
import paymentRoutes from "./routes/Payment.js";
import courseRoutes from "./routes/Course.js";
import contactUsRoute from "./routes/Contact.js";
import { connect } from "./config/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cloudinaryConnect  from "./config/cloudinary.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

// Configuration
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

// Connect to database
connect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp",
	})
);
cloudinaryConnect();

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/reach", contactUsRoute);

// Default route
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running....",
	});
});

// Start the server
app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`);
});
