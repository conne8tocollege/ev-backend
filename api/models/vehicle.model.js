import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    speed: { type: String, required: true },
    range: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],

    engineAndTransmission: {
        motorType: String,
        motorPower: String,
        range: String,
        start: String,
        transmission: String,
        reverseGear: String,
    },

    dimensionAndCapacity: {
        length: String,
        width: String,
        height: String,
        weight: String,
    },

    electricals: {
        batteryType: String,
        batteryCapacity: String,
        chargingTime: String,
    },

    tyresAndBrakes: {
        frontTyre: String,
        rearTyre: String,
        brakingSystem: String,
    },

    performance: {
        motorWarranty: String,
        batteryWarranty: String,
        chargingTime: String,
    },
}, { timestamps: true });

const Vehicles = mongoose.model("Vehicle", vehicleSchema);
export default Vehicles
