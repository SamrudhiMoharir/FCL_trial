import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ComplaintList from './components/ComplaintList.jsx';
import CustomerComplaintForm from './components/CustomerComplaintForm.jsx';
import 8D from '.components\8D.jsx';

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
