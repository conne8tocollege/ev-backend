import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    educationalQualification: {
      type: String,
      required: true,
    },
    presentBusiness: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    yearsInBusiness: {
      type: Number,
      required: true,
    },
    turnover: {
      type: String,
      required: true,
    },
    investmentCapacity: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Dealer = mongoose.model("Dealer", applicantSchema);
export default Dealer;
