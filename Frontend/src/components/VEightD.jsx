
import React from 'react';
import "./VEightD.css";
import { FaBars, FaUser } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const VEightD = () => {
    const data = ["D1", "D2", "D3", "D4", "D5", "D6"];

    return (
        <div className="page-container">
            {/* Navigation Bar */}
            <header className="navbar">
                <div className="navbar-left">
                    <FaBars className="menu-icon" />
                </div>
                <h1 className="navbar-title">8 D's</h1>
                <div className="navbar-right">
                    <a href="#" className="user-guide">📄 User Guide</a>
                    <GoBell className="nav-icon" />
                    <FaUser className="nav-icon" />
                </div>
            </header>

            {/* Table Header*/}
            <div className="table-header">
                <div className="table-label">CAR no.</div>
                <input type="text" className="input-field" placeholder="Enter CAR no." />
                <div className="table-label">Company name</div>
                <input type="text" className="input-field" placeholder="Enter Company name" />
            </div>

            {/* Centered Buttons with Data */}
            <div className="button-list">
                {data.map((item, index) => (
                    <div className="list-item" key={index}>
                        <span className="item-number">{index + 1}</span>
                        <span className="item-label">{item}</span>
                        <MdOutlineDownloadForOffline className="download-icon" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VEightD;
