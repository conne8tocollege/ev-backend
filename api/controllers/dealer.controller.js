import Dealer from "../models/dealer.model.js";

// Create a new Dealer
export const createDealer = async (req, res) => {
  try {
    const Dealer = new Dealer(req.body);
    await Dealer.save();
    res.status(201).json({ message: "Dealer created successfully", Dealer });
  } catch (error) {
    res.status(400).json({ message: "Failed to create Dealer", error: error.message });
  }
};

// Get all Dealers
export const getDealers = async (req, res) => {
  try {
    const Dealers = await Dealer.find().sort({ createdAt: -1 });
    res.status(200).json({ Dealers });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Dealers", error: error.message });
  }
};

// Get an Dealer by ID
export const getDealerById = async (req, res) => {
  try {
    const { id } = req.params;
    const Dealer = await Dealer.findById(id);
    if (!Dealer) {
      return res.status(404).json({ message: "Dealer not found" });
    }
    res.status(200).json({ Dealer });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Dealer", error: error.message });
  }
};

// Update an Dealer
export const updateDealer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDealer = await Dealer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedDealer) {
      return res.status(404).json({ message: "Dealer not found" });
    }
    res.status(200).json({ message: "Dealer updated successfully", updatedDealer });
  } catch (error) {
    res.status(400).json({ message: "Failed to update Dealer", error: error.message });
  }
};

// Delete an Dealer
export const deleteDealer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDealer = await Dealer.findByIdAndDelete(id);
    if (!deletedDealer) {
      return res.status(404).json({ message: "Dealer not found" });
    }
    res.status(200).json({ message: "Dealer deleted successfully", deletedDealer });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Dealer", error: error.message });
  }
};
