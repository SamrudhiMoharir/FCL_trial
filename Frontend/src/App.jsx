import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import ComplaintList from "./components/ComplaintList.jsx";
import CustomerComplaintForm from "./components/CustomerComplaintForm.jsx";
import EightD from "./components/EightD.jsx";
import OneD from "./components/OneD.jsx";
import { useAuthStore } from "./store/useAuthStore.js";

import Dashboard from "./pages/Dashboard.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx"
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx"
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx"
import Error404 from "./pages/Error404.jsx"
import { useEffect } from "react";


// protect routes that require authentication
const ProtectedRoute = ({children}) => {
  const {isAuthenticated, user} = useAuthStore();

  if(!isAuthenticated) {
    // toast.error("user not authenticated. Please login first")
    return <Navigate to='/login' replace />
  }
  
  if(!user.isVerified) {
    toast.error("user not verified. Please verify user mail first")
    return <Navigate to='/verify-email' replace />
  }

  return children;
}

const RedirectAuthenticatedUser = ({children}) => {
  const {isAuthenticated, user} = useAuthStore();

  if(isAuthenticated && user.isVerified) {
      return <Navigate to='/' replace />
  }

  return children;
}

function App() {

  const {checkAuth, isAuthenticated, isCheckingAuth, user} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("isAuthenticated", isAuthenticated);
  console.log("user", user)

  return (
    <Router>
      <Routes>


          <Route 
            path="/signup" 
            element={
              <RedirectAuthenticatedUser>
                <SignUpPage />
              </RedirectAuthenticatedUser>
            } 
          />    

          <Route 
            path="/login" 
            element={
              <RedirectAuthenticatedUser>
                <LoginPage />
              </RedirectAuthenticatedUser>
            }
          /> 
          
          <Route 
            path="/verify-email" 
            element={
              <EmailVerificationPage />
            } 
          />

          <Route 
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <ForgotPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          
          <Route 
            path="/reset-password/:token"
            element={
              <RedirectAuthenticatedUser>
                <ResetPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          
          <Route 
            path="*"
            element={
              <Error404 />
            }
          />


        {/* <Route path="/" element={<ComplaintList />} /> */}
        <Route 
            path="/"
            element={
              <ProtectedRoute>
                <ComplaintList />
              </ProtectedRoute>
            }
          />
        <Route path="/new-complaint" element={<CustomerComplaintForm />} />
        <Route path="/complaint/:id"  element={<EightD />} />
        <Route path="/EightD/:D" element={<OneD />} /> {/* Handle all D pages dynamically */}
      </Routes>
    </Router>
  );
}

export default App;
