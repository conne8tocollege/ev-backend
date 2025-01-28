import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import productRoutes from "./routes/product.route.js";
import serviceRoutes from "./routes/service.route.js";
import sliderRoutes from "./routes/slider.route.js";
import brandRoutes from "./routes/brand.route.js";
import inquiryRoutes from "./routes/inquiry.route.js";
import testimonialRoutes from "./routes/testimonial.route.js";
import metatagsRoutes from "./routes/metatags.route.js";
import bookingRoutes from "./routes/booking.route.js";
import dealerRoutes from "./routes/dealer.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
dotenv.config();
const url =
  process.env.MONGO_URI ||
  "mongodb+srv://abhishek261286:OcVftsTeo7umpcni@cluster0.zqpga.mongodb.net/ev-scooter?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();
const allowedOrigins = ["http://localhost:5173", "https://api.abibasmotors.com"];
app.use(cors({ origin: allowedOrigins, credentials: true }));
// app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use(express.json());
app.use(cookieParser());
const port = 4001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/product", productRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/slider", sliderRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/inquiry", inquiryRoutes);
app.use("/api/applicant", dealerRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/metatags", metatagsRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
