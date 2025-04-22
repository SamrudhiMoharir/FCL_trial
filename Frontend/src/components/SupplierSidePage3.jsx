import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import "./SupplierSidePage3.css";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaPlus,
  FaUpload,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const SupplierSidePage3 = () => {
  const navigate = useNavigate(); // Initialize navigate function

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
    {
      containment: "",
      responsibility: "",
      targetDate: "",
      completionDate: "",
      status: "",
    },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        containment: "",
        responsibility: "",
        targetDate: "",
        completionDate: "",
        status: "",
      },
    ]);
  };

  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  // Navigate to next page
  const handleNextStep = () => {
    navigate("/suppliersideD4"); // Navigate to SupplierSideD4
  };

  // Navigate to previous page
  const handleGoBack = () => {
    navigate("/suppliersideD2"); // Navigate to SupplierSideD2
  };

  return (
    <div className="supp-container">
      <header className="supp-header">
        <button className="supp-menu-btn">☰</button>
        <h1 className="supp-logo">D3</h1>
        <div className="supp-header-right">
          <a href="#" className="supp-user-guide">📄 User Guide</a>
          <span className="supp-icon">🔔</span>
          <span className="supp-icon">👤</span>
        </div>
      </header>

      <button className="supp-containment-btn">Containment Actions</button>

      <table className="supp-main-table">
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
              <td>
                <input
                  type="text"
                  value={row.containment}
                  onChange={(e) =>
                    updateRow(index, "containment", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.responsibility}
                  onChange={(e) =>
                    updateRow(index, "responsibility", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  value={row.targetDate}
                  onChange={(e) =>
                    updateRow(index, "targetDate", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  value={row.completionDate}
                  onChange={(e) =>
                    updateRow(index, "completionDate", e.target.value)
                  }
                />
              </td>
              <td className="supp-status-cell">
                  <select
                    value={row.status}
                    onChange={(e) => updateRow(index, "status", e.target.value)}
                    className={`supp-status-dropdown ${row.status}`}
                  >
                    <option value="">Select</option>
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                  {row.status === "done" ? (
                    <FaCheckCircle className="supp-status-icon done" />
                  ) : row.status === "pending" ? (
                    <FaHourglassHalf className="supp-status-icon pending" />
                  ) : row.status === "in progress" ? (
                    <FaHourglassHalf className="supp-status-icon progress" />
                  ) : null}
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="supp-add-row" onClick={handleAddRow}>
        <FaPlus className="supp-plus-icon" /> Add Row
      </div>

      <div className="supp-upload-section">
        <label>Upload Supporting Docs</label>
        <FaUpload className="supp-upload-icon" />
      </div>

      <table className="supp-stock-table">
        <thead>
          <tr>
            <th colSpan="6" className="supp-stock-header">Stock assessment</th>
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
            <td><input type="text" defaultValue="0" /></td>
            <td><input type="number" defaultValue="0" /></td>
            <td><input type="number" defaultValue="0" /></td>
            <td><input type="text" defaultValue="0" /></td>
            <td><input type="number" defaultValue="0" /></td>
            <td><input type="number" defaultValue="0" /></td>
          </tr>
        </tbody>
      </table>

      <div className="supp-button-row">
        <button className="supp-next-btn" onClick={handleNextStep}>
          Next Step <FaArrowRight />
        </button>
        <button className="supp-submit-btn">Submit</button>
        <button className="supp-back-btn" onClick={handleGoBack}>
          <FaArrowLeft /> Go Back
        </button>
      </div>
    </div>
  );
};

export default SupplierSidePage3;