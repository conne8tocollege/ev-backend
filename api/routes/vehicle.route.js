import express from "express";
import { createVehicle, getVehicles, getVehicleById, updateVehicle, deleteVehicle } from "../controllers/vehicle.controller.js"
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
router.post("/", verifyToken, createVehicle);
router.get("/", getVehicles);
router.get("/:id", verifyToken, getVehicleById);
router.put("/:id", verifyToken, updateVehicle);
router.delete("/:id", verifyToken, deleteVehicle);

export default router
