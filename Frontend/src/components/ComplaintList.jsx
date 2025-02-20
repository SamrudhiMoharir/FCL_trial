import React, { useState, useEffect } from "react";
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

  // Filter complaints based on selected status
  const filteredComplaints = complaints.filter((complaint) => 
    filter === "All" || complaint.status === filter
  );

  return (
    
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
      <table className="complaint-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.length > 0 ? (
            filteredComplaints.map((complaint, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{complaint.companyCode}</td>
                <td>
                  <span className={`status ${complaint.status.toLowerCase()}`}>
                    {complaint.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No complaints found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Status Legend */}
      <div className="legend">
        <span className="status completed">Completed</span>
        <span className="status in-progress">In Progress</span>
        <span className="status pending">Pending</span>
      </div>

      {/* New Complaint Button */}
      <button className="new-complaint-btn" onClick={() => navigate("/new-complaint")}>
        New Complaint
      </button>
    </div>
  );
};

export default ComplaintList;
