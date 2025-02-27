import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Added Link
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import "./EightD.css";

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]); // ✅ Define complaints array

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/complaints") // ✅ Fetch complaints list
      .then((response) => setComplaints(response.data))
      .catch((error) => console.error("Error fetching complaints:", error));
  }, []);

  return (
    <div className="complaint-list-container">
      <h1>8 D’s</h1>
      <div className="table-header">
        <span>CAR no. -</span>
        <span>Company name -</span>
      </div>

      {/* ✅ Map through complaints array */}
      <div className="complaint-list">
        {complaints.map((complaint) => (
          <Link to={`/complaint/${complaint.id}`} key={complaint.id} className="complaint-item">
            <span className="complaint-id">{complaint.id}</span>
            <span className="complaint-name">{complaint.companyCode}</span>
            <FaDownload className="download-icon" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComplaintList; // ✅ FIXED: Correctly exporting ComplaintList



