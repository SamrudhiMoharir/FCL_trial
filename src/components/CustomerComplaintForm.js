import React, { useState } from "react";
import "./CustomerComplaintForm.css";

const CustomerComplaintForm = () => {
  const [formData, setFormData] = useState({
    companyCode: "",
    dateRaised: "",
    partNumber: "",
    mailId: "",
    rejectionQuantity: "",
    receiptFile: null,
    documentFile: null,
    rejectionStatement: {
      what: "",
      when: "",
      why: "",
      where: "",
      who: "",
      how: "",
      howMuch: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStatementChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      rejectionStatement: { ...prevData.rejectionStatement, [name]: value },
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="form-title">Customer Complaint Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Company Code</label>
            <input type="text" name="companyCode" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Date Raised</label>
            <input type="date" name="dateRaised" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Customer Part Number</label>
            <input type="text" name="partNumber" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Customer Email</label>
            <input type="email" name="mailId" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Rejection Quantity</label>
            <input type="number" name="rejectionQuantity" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Receipt File</label>
            <input type="file" name="receiptFile" onChange={handleFileChange} />
          </div>
          <div className="input-group">
            <label>Document File</label>
            <input type="file" name="documentFile" onChange={handleFileChange} />
          </div>
          <div className="buttons">
            <button type="button" className="save-btn">Save</button>
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerComplaintForm;
