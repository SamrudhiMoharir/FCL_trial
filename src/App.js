import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerComplaintForm from "./components/CustomerComplaintForm";
import "./style.css";

export default function CustomerComplaintsApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerComplaintForm />} />
      </Routes>
    </Router>
  );
}
