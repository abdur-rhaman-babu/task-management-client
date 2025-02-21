
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();
 
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;