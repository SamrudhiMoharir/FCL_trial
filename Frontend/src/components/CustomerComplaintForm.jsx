import React, { useState } from "react";
import "./CustomerComplaintForm.css";
import TableComponent from "./TableComponent"; 

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
        <h3 className="heading">Customer name and address</h3>

        <form onSubmit={handleSubmit} className="firstbox">
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
            <label>Upload Images/Documents </label>
            <input type="file" name="documentFile" onChange={handleFileChange} />
          </div>

          <hr />

          <div className="input-group">
            <label>Rejection Statement:</label>
          </div>

          {/* Render the table component */}
          <TableComponent
            rejectionStatement={formData.rejectionStatement}
            handleStatementChange={handleStatementChange}
          />

          <div className="buttons">
            <button type="button" className="save-btn">
              Save
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerComplaintForm;
