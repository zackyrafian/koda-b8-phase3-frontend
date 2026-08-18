import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";

export const router = createBrowserRouter([
  {
    path: "/auth",
    children: [
      {
        path: "register", 
        element: <RegisterPage/>
      }, 
      {
        path: "login", 
        element: <LoginPage/>
      }
    ]
  },
]);