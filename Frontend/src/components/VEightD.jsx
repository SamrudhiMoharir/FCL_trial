
import React from "react";
import "./VEightD.css"
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaBars, FaUser } from "react-icons/fa";
import { GoBell } from "react-icons/go";

const VEightD = () => {
  const data = ["D1", "D2", "D3", "D4", "D5", "D6"];

  return (
    <div className="container">
      <header className="header">
        <FaBars className="icon" />
        <h1>8 D’s</h1>
        <div className="header-icons">
          <a href="#">User Guide</a>
          <GoBell className="icon" />
          <FaUser className="icon" />
        </div>
      </header>
      <div className="content">
        <div className="table-header">
          <span>CAR no. -</span>
          <span>Company name -</span>
        </div>
        <div className="card-container">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <span className="number">{index + 1}</span>
              <span className="company">{item}</span>
              <MdOutlineDownloadForOffline className="download-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VEightD;

