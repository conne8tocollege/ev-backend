import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        scooterModel: {
            type: String,
            required: true, // Mandatory field
        },
        color: {
            type: String,
            required: true, // Mandatory field
        },
        name: {
            type: String,
            required: true, // Mandatory field
        },
        email: {
            type: String,
            required: true, // Mandatory field
            match: /.+\@.+\..+/,
        },
        contactNumber: {
            type: String,
            required: true, // Mandatory field
            match: /^\+91\s?\d{10}$/, // Matches Indian phone numbers with +91
        },
        state: {
            type: String,
            required: true, // Mandatory field
        },
        city: {
            type: String,
            required: true, // Mandatory field
        },
        address: {
            type: String,
            required: true, // Mandatory field
        },
        landmark: {
            type: String,
            required: false, // Optional field
        },
        pincode: {
            type: String,
            required: true, // Mandatory field
            match: /^\d{6}$/, // Matches a 6-digit Indian pincode
        },
        bookingAmount: {
            type: Number,
            required: true, // Mandatory field
            min: 0, // Booking amount cannot be negative
        },
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
