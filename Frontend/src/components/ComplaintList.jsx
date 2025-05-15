import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ComplaintList.css";
import axios from "axios";

const ComplaintList = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/complaint/get-complaints") // ✅ Fixed Axios request
      .then((response) => {
        setComplaints(response.data.data || response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
      });
  }, []);

  const getProgressDots = (status) => {
    const totalDots = 8;
    let filledDots = 0;

    if (status === "Pending") filledDots = 0;
    if (status === "In Progress") filledDots = Math.ceil(totalDots / 3);
    if (status === "Resolved") filledDots = totalDots;

    return Array.from({ length: totalDots }, (_, i) => (
      <span key={i} className={`dot ${i < filledDots ? status.toLowerCase() : "empty"}`}></span>
    ));
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="complaint-list-container">
          <h2 className="head">Complaint List</h2>

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
                      (complaint) =>
                        filter === "All" || complaint.status.toLowerCase() === filter.toLowerCase()
                    )
                    .map((complaint, index) => (
                      <tr key={index} className="complaint-row">
                        <td className="complaint-id">{index + 1}</td>
                        {/* ✅ Added `onClick` inside `.map()` */}
                        <td
                          className="complaint-company"
                          onClick={() => navigate(`/complaint/${complaint._id}`)}
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                        >
                          {complaint.companyCode}
                        </td>
                        <td className="complaint-progress">
                          <div className="progress-dots">{getProgressDots(complaint.status)}</div>
                        </td>
                        <td className={`complaint-status ${complaint.status.toLowerCase()}`}>
                          {complaint.status}
                        </td>
                        {/* <td className={`complaint-status ${complaint.status.toLowerCase()}`}>
                          {complaint.CARNo}
                        </td> */}
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan="4" className="no-complaints">No complaints found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* New Complaint Button */}
          <button className="new-complaint-btn" onClick={() => navigate("/new-complaint")}>
            New Complaint
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
