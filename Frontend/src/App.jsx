import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ComplaintList from "./components/ComplaintList.jsx";
import CustomerComplaintForm from "./components/CustomerComplaintForm.jsx";
import EightD from "./components/EightD.jsx";
import OneD from "./components/OneD.jsx";
<<<<<<< HEAD
import SupplierSidePage2 from "./components/SupplierSidePage2";
import SupplierSidePage3 from "./components/SupplierSidePage3";

=======
import SupplierSidePage3 from "./components/SupplierSidePage3";


import { useAuthStore } from "./store/useAuthStore.js";
>>>>>>> e35c192ad9d7dd8bba07e7027cf33b4964ab9954
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore.js";

import ForgotPassword from "./authentication/ForgotPassword.jsx";
import Login from "./authentication/Login.jsx";
import OtpVerification from "./authentication/OtpVerification.jsx";
import OtpVerificationProcess from "./authentication/OtpVerificationprocess.jsx";
import PasswordReset from "./authentication/PasswordReset.jsx";
import SetNewPassword from "./authentication/SetNewPassword.jsx";
import SignUp from "./authentication/SignUp.jsx";
import Error404 from "./pages/Error404.jsx";

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


        <Route path="/" element={<ComplaintList />} />
        <Route 
            path="/"
            element={
              <ProtectedRoute>
                <ComplaintList />
              </ProtectedRoute>
            }
          />
        <Route path="/new-complaint" element={<CustomerComplaintForm />} />
<<<<<<< HEAD
        <Route path="/complaint/:id" element={<EightD />} />
        <Route path="/EightD/:D" element={<EightD />} />
        <Route path="/OneD/:D" element={<OneD />} />
        <Route path="/suppliersideD2" element={<SupplierSidePage2 />} />
=======
        <Route path="/complaint/:id"  element={<ComplaintList />} />
        <Route path="/EightD/:D" element={<EightD />} />
        <Route path="/OneD/:D" element={<OneD />} />
>>>>>>> e35c192ad9d7dd8bba07e7027cf33b4964ab9954
        <Route path="/suppliersideD3" element={<SupplierSidePage3 />} />
      </Routes>
    </Router>
    <Toaster />
    </>
  );
}

export default App;