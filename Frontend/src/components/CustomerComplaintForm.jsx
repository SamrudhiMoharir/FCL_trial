import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerComplaintForm.css";
import TableComponent from "./TableComponent";
import axios from 'axios';


const CustomerComplaintForm = () => {
  const navigate = useNavigate(); // For navigation after form submission
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
    // setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    if (name === "images") {
      setFormData((prevData) => ({ ...prevData, [name]: [...files] }));
    } else {
      // For single file inputs like receiptFile
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve existing complaints from localStorage
    // const existingComplaints = JSON.parse(localStorage.getItem("complaints")) || [];

    // // Create a new complaint object
    // const newComplaint = {
    //   companyCode: formData.companyCode,
    //   dateRaised: formData.dateRaised,
    //   partNumber: formData.partNumber,
    //   mailId: formData.mailId,
    //   rejectionQuantity: formData.rejectionQuantity,
    //   status: "Pending", // Default status for new complaints
    // };

    // // Save updated complaints list to localStorage
    // localStorage.setItem("complaints", JSON.stringify([...existingComplaints, newComplaint]));

    // // Redirect to Complaint List page
    // navigate("/");

  const data = new FormData();
  data.append("companyCode", formData.companyCode);
  data.append("dateRaised", formData.dateRaised);
  data.append("partNumber", formData.partNumber);
  data.append("mailId", formData.mailId);
  data.append("rejectionQuantity", formData.rejectionQuantity);
  if (formData.receiptFile) data.append("receiptFile", formData.receiptFile);
  if (formData.images && formData.images.length > 0) {
    formData.images.forEach((file) => {
      data.append("images", file);
    });
  }
  data.append("what", formData.rejectionStatement.what);
  data.append("when", formData.rejectionStatement.when);
  data.append("why", formData.rejectionStatement.why);
  data.append("where", formData.rejectionStatement.where);
  data.append("who", formData.rejectionStatement.who);
  data.append("how", formData.rejectionStatement.how);
  data.append("howMuch", formData.rejectionStatement.howMuch);

  console.log(formData);
  // navigate("/");
  try {
    const response = await axios.post("http://localhost:5000/api/complaint/new-complaint", data);
    console.log("Complaint created successfully:", response.data);
    navigate("/");
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }

  };

  return (
    <div className="contain">
      <div className="wrapper">
        <h2 className="form-title">Customer Complaint Form</h2>
        <h3 className="heading">&nbsp;Customer Name and Address</h3>

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
            <input type="text" name="customerPartNumber" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Customer Email</label>
            <input type="email" name="customerEmail" onChange={handleChange} required />
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
            <input type="file" name="images" multiple onChange={handleFileChange} />
          </div>

          <hr />

          <div className="input-group">
            <h3>Rejection Statement:</h3>
          </div>

          <TableComponent rejectionStatement={formData.rejectionStatement} handleStatementChange={handleStatementChange} />

          <div className="guidelines-box">
            <h3><strong>Statement Guidelines :</strong></h3>
            <ol>
              <li>Be sure to include specific information as to the exact problem, such as where located, how many affected, since when, etc.</li>
              <li>Be sure to include any existing measurable data, such as deviations in performance values, measured non-conformance features characteristics, etc.</li>
              <li>Where possible include any supporting photos or documents that illustrate the issue and clarify where possible.</li>
            </ol>
          </div>

          <div className="buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerComplaintForm;
