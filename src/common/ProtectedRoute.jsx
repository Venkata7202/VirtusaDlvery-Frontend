import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../common/AuthProvider";

export const ProtectedRoute = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
    //
  }

  // If authenticated, render the child routes
  return <Outlet />;
};
