import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ComplaintList from './components/ComplaintList';
import CustomerComplaintForm from './components/CustomerComplaintForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComplaintList />} />
        <Route path="/new-complaint" element={<CustomerComplaintForm />} />
      </Routes>
    </Router>
  );
}

export default App;
