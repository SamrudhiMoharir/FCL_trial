import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ComplaintList from './components/ComplaintList.jsx';
import CustomerComplaintForm from './components/CustomerComplaintForm.jsx';
import VEightD from './components/VEightD.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComplaintList />} />
        <Route path="/new-complaint" element={<CustomerComplaintForm />} />
        <Route path="/complaint" element={<VEightD />} /> {/* ✅ Add this */}
      </Routes>
    </Router>
  );
}
export default App;

