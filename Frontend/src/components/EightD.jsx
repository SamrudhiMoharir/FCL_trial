// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./EightD.css";
// import { FaBars, FaUser } from "react-icons/fa";
// import { GoBell } from "react-icons/go";
// import { MdOutlineDownloadForOffline } from "react-icons/md";

// const EightD = () => {
//     const navigate = useNavigate();
//     const data = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"];

//     const handleNavigation = (item) => {
<<<<<<< HEAD
//         navigate(/EightD/${item}); // Navigate to the respective D page
=======
//         navigate(`/EightD/${item}`); // Navigate to the respective D page
>>>>>>> e35c192ad9d7dd8bba07e7027cf33b4964ab9954
//     };

//     return (
//         <div className="EightD-container">
//             {/* Navigation Bar */}
//             <header className="navbar">
//                 <div className="navbar-left">
//                     <FaBars className="menu-icon" />
//                 </div>
//                 <h1 className="navbar-title">8 D's</h1>
//                 <div className="navbar-right">
//                     <a href="#" className="user-guide">📄 User Guide</a>
//                     <GoBell className="nav-icon" />
//                     <FaUser className="nav-icon" />
//                 </div>
//             </header>

//             {/* Table Header */}
//             <div className="table-header">
//                 <div className="table-label">CAR no.</div>
//                 {/* <input type="text" className="input-field" placeholder="Enter CAR no." /> */}
//                 <div className="table-label">Company name</div>
//                 {/* <input type="text" className="input-field" placeholder="Enter Company name" /> */}
//             </div>

//             {/* Centered Buttons with Data */}
//             <div className="button-list">
//                 {data.map((item, index) => (
//                     <div
//                         className="list-item"
//                         key={index}
//                         onClick={() => handleNavigation(item)} // Click to navigate
//                     >
//                         <span className="item-number">{index + 1}</span>
//                         <span className="item-label">{item}</span>
//                         <MdOutlineDownloadForOffline className="download-icon" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default EightD;



import React from "react";
import { useNavigate } from "react-router-dom";
import "./EightD.css";
import { FaBars, FaUser } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const EightD = () => {
    const navigate = useNavigate();
    const data = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"];

    const handleNavigation = (item) => {
        if (item === "D1") {
            navigate(`/OneD/${item}`); // Navigate to OneD page with dynamic param
<<<<<<< HEAD
        } 
        else if (item === "D2") {
            navigate("/suppliersideD2"); // Navigate to SupplierSidePage3
        } 
        else if (item === "D3") {
=======
        } else if (item === "D3") {
>>>>>>> e35c192ad9d7dd8bba07e7027cf33b4964ab9954
            navigate("/suppliersideD3"); // Navigate to SupplierSidePage3
        } else {
            navigate(`/EightD/${item}`); // Default navigation for other D's
        }
    };
    

    return (
        <div className="EightD-container">
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

            {/* Table Header */}
            <div className="table-header">
                <div className="table-label">CAR no.</div>
                {/* <input type="text" className="input-field" placeholder="Enter CAR no." /> */}
                <div className="table-label">Company name</div>
                {/* <input type="text" className="input-field" placeholder="Enter Company name" /> */}
            </div>

            {/* Centered Buttons with Data */}
            <div className="button-list">
                {data.map((item, index) => (
                    <div
                        className="list-item"
                        key={index}
                        onClick={() => handleNavigation(item)}
                    >
                        <span className="item-number">{index + 1}</span>
                        <span className="item-label">{item}</span>
                        <MdOutlineDownloadForOffline className="download-icon" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EightD;