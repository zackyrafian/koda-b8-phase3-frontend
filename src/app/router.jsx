import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../pages/auth/register";

export const router = createBrowserRouter([
  {
    path: "/auth/register",
    element: <RegisterPage/>
  },
]);