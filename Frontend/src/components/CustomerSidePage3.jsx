import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./customersideD3.css";
import { FaCheckCircle, FaHourglassHalf, FaUpload, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CustomerSidePage3 = () => {
  const [rows, setRows] = useState([
    {
      containment: "Stock at Imperior Auto is rejected",
      responsibility: "Mr. Harshal Tamkhane",
      targetDate: "2025-03-08",
      completionDate: "2025-03-08",
      status: "done",
    },
    {
      containment: "Verified the stock at FCL",
      responsibility: "Mr. Bhimsingh Thoke",
      targetDate: "2025-03-09",
      completionDate: "2025-01-10",
      status: "pending",
    },
  ]);

  return (
    <div className="cust-container white-bg">
      <header className="cust-header">
        <button className="cust-menu-btn">☰</button>
        <h1 className="cust-logo">D3</h1>
        <div className="cust-header-right">
          <a href="#" className="cust-user-guide">📄 User Guide</a>
          <span className="cust-icon">🔔</span>
          <span className="cust-icon">👤</span>
        </div>
      </header>

      <button className="cust-containment-btn">Containment Actions</button>

      <table className="cust-main-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Containment</th>
            <th>Responsibility</th>
            <th>Target date</th>
            <th>Completion date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.containment}</td>
              <td>{row.responsibility}</td>
              <td>{row.targetDate}</td>
              <td>{row.completionDate}</td>
              <td>
                {row.status === "done" ? (
                  <FaCheckCircle className="cust-status-icon done" />
                ) : row.status === "pending" ? (
                  <FaHourglassHalf className="cust-status-icon pending" />
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cust-upload-section full-width">
        <label>Immediate actions</label>
        <FaUpload className="cust-upload-icon" />
      </div>

      <table className="cust-stock-table">
        <thead>
          <tr>
            <th colSpan="6" className="cust-stock-header">Stock assessment</th>
          </tr>
          <tr>
            <th>FCPL site</th>
            <th>Good Qty</th>
            <th>Rej Qty</th>
            <th>Vendor site</th>
            <th>Good Qty</th>
            <th>Rej Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      <div className="cust-button-row">
                {/* Next Step Button - Link to the next page */}

      <Link to="/customersideD4">
          <button className="cust-three-btn">Next Step <FaArrowRight /></button>
        </Link>

        <button className="cust-three-btn">Approve</button>
       
        {/* Go Back Button - Link to the previous page */}
        <Link to="/customersideD2">
          <button className="cust-three-btn"><FaArrowLeft /> Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerSidePage3;