import express from "express";
import {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
} from "../controllers/booking.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", createBooking);

router.get("/getAllBookings", getAllBookings, verifyToken);

router.get("/:id", getBookingById, verifyToken);

router.put("/:id", updateBooking, verifyToken);

router.delete("/:id", deleteBooking, verifyToken);

export default router;
