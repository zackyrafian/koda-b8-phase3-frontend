import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ children }) { 
  const { token, logout } = useContext(AuthContext); 
  if (!token) {
    return <Navigate to={"/login"} replace/>
  }

  try { 
    const decode = jwtDecode(token);
    if (decode.exp < Date.now() / 1000) { 
      logout();
      return <Navigate to={"/login"} replace/>
    }
  } catch (error) { 
    logout(); 
    return <Navigate to={"/login"} replace/>
  }
  return children;
}