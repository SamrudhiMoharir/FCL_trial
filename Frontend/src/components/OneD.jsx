import React from "react";
import { useParams } from "react-router-dom";
import "./oneD.css";
import { FaBars, FaUser } from "react-icons/fa";
import { GoBell } from "react-icons/go";

const OneD = () => {
    const { D } = useParams(); // Get dynamic D value from URL

    return (
        <div className="page-container">
            {/* Navigation Bar */}
            <header className="navbar">
                <FaBars className="menu-icon" />
                <h1 className="navbar-title">{D}</h1> {/* Show Dynamic Title */}
                <div className="navbar-right">
                    <a href="#" className="user-guide">📄 User Guide</a>
                    <GoBell className="nav-icon" />
                    <FaUser className="nav-icon" />
                </div>
            </header>

            {/* Progress Bar */}
            <div className="progress-bar">
                <button className="progress-btn active">Complain Form</button>
                <span className="progress-view">👁️ View</span>
                <button className="progress-btn submitted">Submitted ⬇</button>
            </div>

            {/* Assigned Team Table */}
            <h2 className="section-title">Assigned Team</h2>
            <table className="team-table">
                <thead>
                    <tr>
                        <th>Team Member</th>
                        <th>Job Title</th>
                        <th>Role</th>
                        <th>Contact/Mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td><td></td></tr>
                </tbody>
            </table>

            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <button className="next-step">Next Step</button>
                <button className="back-btn">⬅</button>
            </div>
        </div>
    );
};

export default OneD;
