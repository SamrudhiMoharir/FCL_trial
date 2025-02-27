import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EightD.css";

const ComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/complaint/${id}`)
      .then((response) => {
        setComplaint(response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaint details:", error);
      });
  }, [id]);

  if (!complaint) {
    return <p>Loading complaint details...</p>;
  }

  return (
    <div className="complaint-details-container">
      <h1>8 D's</h1>
      <h2>{complaint.companyCode}</h2>
      <p>Status: {complaint.status}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ComplaintDetails;
