import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ComplaintList from "./components/ComplaintList.jsx";
import CustomerComplaintForm from "./components/CustomerComplaintForm.jsx";
import EightD from "./components/EightD.jsx";
import OneD from "./components/OneD.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComplaintList />} />
        <Route path="/new-complaint" element={<CustomerComplaintForm />} />
        <Route path="/complaint/:id"  element={<EightD />} />
        <Route path="/EightD/:D" element={<OneD />} /> {/* Handle all D pages dynamically */}
      </Routes>
    </Router>
  );
}

export default App;
