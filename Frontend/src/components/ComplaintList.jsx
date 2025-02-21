import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ComplaintList.css";

const ComplaintList = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load complaints from localStorage
  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

  // Function to generate 8-dot progress indicators
  const getProgressDots = (status) => {
    const totalDots = 8;
    let filledDots = 0;

    if (status === "Pending") filledDots = 0;
    if (status === "In Progress") filledDots = Math.ceil(totalDots / 2);
    if (status === "Resolved") filledDots = totalDots;

    return Array.from({ length: totalDots }, (_, i) =>
      i < filledDots ? "●" : "○"
    ).join(" ");
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="complaint-list-container">
          <h2 className="title">Complaint List</h2>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {["All", "Pending", "In Progress", "Resolved"].map((status) => (
              <button
                key={status}
                className={filter === status ? "active" : ""}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Complaint Table */}
          <div className="complaint-table-wrapper">
            <table className="complaint-table">
              <tbody>
                {complaints.length > 0 ? (
                  complaints
                    .filter(
                      (complaint) => filter === "All" || complaint.status === filter
                    )
                    .map((complaint, index) => (
                      <tr key={index} className="complaint-row">
                        <td className="complaint-id">{index + 1}</td>
                        <td className="complaint-company">{complaint.companyCode}</td>
                        <td className="complaint-status">
                          <span className={`status ${complaint.status.toLowerCase()}`}>
                            {complaint.status}
                          </span>
                          <div className="progress-dots">
                            {getProgressDots(complaint.status)}
                          </div>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan="3" className="no-complaints">
                      No complaints found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* New Complaint Button */}
          <button
            className="new-complaint-btn"
            onClick={() => navigate("/new-complaint")}
          >
            New Complaint
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
