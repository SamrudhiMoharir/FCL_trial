// models/Complaint.js
import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  companyCode: {
    type: String,
    required: true
  },
  dateRaised: {
    type: Date,
    required: true
  },
  customerPartNumber: {
    type: String
  },
  customerEmail: {
    type: String
  },
  rejectionQuantity: {
    type: Number,
    default: 0
  },
  receiptFile: {
    type: String
  },
  images: {
    type: [String],
    default: []
  },
  rejectionStatement: {
    what: { type: String },
    when: { type: String },
    why: { type: String },
    where: { type: String },
    who: { type: String },
    how: { type: String },
    howMuch: { type: String }
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "in progress", "resolved"],
    default: "pending"
  }
}, { timestamps: true });

export const Complaint = mongoose.model("Complaint", complaintSchema);
