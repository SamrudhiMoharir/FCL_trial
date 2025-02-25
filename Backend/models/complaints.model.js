// models/Complaint.js
import mongoose from 'mongoose';
import { Counter } from './counter.model.js';

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
  },
  CARNo: { 
    type: String, 
    unique: true 
  } 
}, { timestamps: true });


complaintSchema.pre("save", async function (next) {
  if (!this.CARNo) {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const counter = await Counter.findOneAndUpdate(
      { name: "CARNo" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const sequenceNumber = String(counter.seq).padStart(3, "0");
    this.CARNo = `FCL/${month}/${year}/${sequenceNumber}`;
  }
  next();
});

export const Complaint = mongoose.model("Complaint", complaintSchema);
