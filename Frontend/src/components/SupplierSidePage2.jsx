import React from 'react';
import { useNavigate } from "react-router-dom";
import './SupplierSidePage2.css';
import { FaPlus, FaArrowLeft, FaUpload } from 'react-icons/fa';

const SupplierSidePage2 = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="supplier-page2">
      <header className="header">
        <button className="menu-icon">☰</button>
        <h1 className="title">D2</h1>
        <div className="header-actions">
          <a href="/user-guide" className="user-guide">📄 User Guide</a>
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
        </div>
      </header>

      <h2 className="section-title">Problem Description (5W2H)</h2>

      <form className="problem-form">
        {[
          "What is the problem?",
          "Why is it a problem?",
          "Where is the problem?",
          "Who is impacted?",
          "When was it observed?",
          "How is it observed?",
          "How much is affected?",
        ].map((label, idx) => (
          <div className="form-row" key={idx}>
            <label>{label}</label>
            <input type="text" placeholder={`Enter ${label.toLowerCase()}`} />
          </div>
        ))}

        <div className="form-row plus-icon-row">
          <button type="button" className="plus-button"><FaPlus /></button>
        </div>

        <div className="upload-row">
          <label>Upload Supporting Docs</label>
          <button type="button" className="upload-button"><FaUpload /></button>
        </div>

        <div className="form-actions">
  <button type="button" className="back-button" onClick={() => navigate("/OneD/D1")}>
    <FaArrowLeft />
  </button>
  <button type="submit" className="submit">
    Submit
  </button>
  <button type="button" className="next-step" onClick={() => navigate("/suppliersideD3")}>
    Next Step
  </button>

  
</div>
      </form>
    </div>
  );
};

export default SupplierSidePage2;
