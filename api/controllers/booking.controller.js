import Booking from "../models/booking.model.js";

// Create a new booking
export const createBooking = async (req, res) => {
    req.body.bookingAmount = Number(req.body.bookingAmount);

    try {
        const newBooking = new Booking(req.body);

        const savedBooking = await newBooking.save();

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking: savedBooking,
        });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({
            success: false,
            message: "Error creating booking",
            error: error.message,
        });
    }
};


// Get all bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({
            success: true,
            bookings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching bookings",
            error: error.message,
        });
    }
};

// Get a single booking by ID
export const getBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }
        res.status(200).json({
            success: true,
            booking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching booking",
            error: error.message,
        });
    }
};

// Update a booking
export const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedBooking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Booking updated successfully",
            booking: updatedBooking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating booking",
            error: error.message,
        });
    }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting booking",
            error: error.message,
        });
    }
};
