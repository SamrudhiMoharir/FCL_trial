import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ComplaintList from './components/ComplaintList';
import CustomerComplaintForm from "./components/CustomerComplaintForm";
import "./style.css";
import SignupPage from "./components/SignupPage";

export default function CustomerComplaintsApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerComplaintForm />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
