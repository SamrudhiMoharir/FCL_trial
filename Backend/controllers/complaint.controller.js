import { Complaint } from "../models/complaints.model.js";

export const newComplaint = async (req, res) => {
  try {
    // Access text fields
    let {
      companyCode,
      dateRaised,
      customerPartNumber,
      customerEmail,
      rejectionQuantity,
      what,
      when,
      why,
      where,
      who,
      how,
      howMuch,
      status,
      CARNo
    } = req.body;

    // Access file info (if any)
    // Multer puts uploaded files in req.files by field name
    const receiptFile = req.files?.receiptFile ? req.files.receiptFile[0] : null;
    const images = req.files?.images || [];

    if (!companyCode || !dateRaised) {
      return res.status(400).json({ message: "Missing required fields" });
    }


    // Prepare data for DB
    const newComplaintData = {
      companyCode,
      dateRaised,
      customerPartNumber,
      customerEmail,
      rejectionQuantity: Number(rejectionQuantity),
      rejectionStatement: {
        what,
        when,
        why,
        where,
        who,
        how,
        howMuch
      },
    status,
    CARNo
    };

    // If you want to store file paths
    if (receiptFile) {
      newComplaintData.receiptFile = receiptFile.path;
    }
    if (images.length > 0) {
      newComplaintData.images = images.map((file) => file.path);
    }

    // Save to DB
    const newComplaint = new Complaint(newComplaintData);
    await newComplaint.save();

    return res.status(201).json({
      success: true,
      data: newComplaint
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create complaint',
      error: error.message
    });
  }
};

export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({});
    
    console.log(complaints);

    return res
    .status(200)
    .json({
      success: true,
      data: complaints
    })

  } catch (error) {
    console.error("Error fetching complaints:", error);
    return res
    .status(500)
    .json({ 
       success: false,
       message: error.message
    });
  }
}