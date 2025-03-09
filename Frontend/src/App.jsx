import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import ComplaintList from "./components/ComplaintList.jsx";
import CustomerComplaintForm from "./components/CustomerComplaintForm.jsx";
import EightD from "./components/EightD.jsx";
import OneD from "./components/OneD.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

import SignUp from "./authentication/SignUp.jsx";
import Login from "./authentication/Login.jsx";
import OtpVerification from "./authentication/OtpVerification.jsx";
import OtpVerificationProcess from "./authentication/OtpVerificationprocess.jsx";
import SetNewPassword from "./authentication/SetNewPassword.jsx";
import PasswordReset from "./authentication/PasswordReset.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx"
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx"
import Error404 from "./pages/Error404.jsx"
import ForgotPassword from "./authentication/ForgotPassword.jsx";


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
    <>
    <Router>
      <Routes>


          <Route 
            path="/signup" 
            element={
              <RedirectAuthenticatedUser>
                <SignUp />
              </RedirectAuthenticatedUser>
            } 
          />    

          <Route 
            path="/login" 
            element={
              <RedirectAuthenticatedUser>
                <Login />
              </RedirectAuthenticatedUser>
            }
          /> 
          
          <Route 
            path="/verify-email" 
            element={
              <OtpVerification />
            } 
          />
          
          <Route 
            path="/otp-verification-process" 
            element={
              <OtpVerificationProcess />
            } 
          />
          
          <Route 
            path="/set-new-password" 
            element={
              <SetNewPassword />
            } 
          />

          <Route 
            path="/password-reset" 
            element={
              <PasswordReset />
            } 
          />


          <Route 
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <ForgotPassword />
              </RedirectAuthenticatedUser>
            }
          />
          
          <Route 
            path="/reset-password/:token"
            element={
              <RedirectAuthenticatedUser>
                <SetNewPassword />
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
    <Toaster />
    </>
  );
}

export default App;
