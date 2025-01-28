import express from "express";
import {
    createDealer,
    getDealers,
    getDealerById,
    updateDealer,
    deleteDealer,
} from "../controllers/dealer.controller.js";

const router = express.Router();

// Create a new Dealer
router.post("/", createDealer);

// Get all Dealers
router.get("/", getDealers);

// Get an Dealer by ID
router.get("/:id", getDealerById);

// Update an Dealer
router.put("/:id", updateDealer);

// Delete an Dealer
router.delete("/:id", deleteDealer);

export default router;
