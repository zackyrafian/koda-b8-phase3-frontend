import { createBrowserRouter, Outlet } from "react-router-dom";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";
import CreateShortLink from "../pages/dahsboard/create";
import RedirectPage from "../pages/redirect";
import HomePage from "../pages/home";
import MyLinksPage from "../pages/dahsboard/my-link";
import ProfilePage from "../pages/dahsboard/profile";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/not-found";

export const router = createBrowserRouter([
  {
    path: "register", 
    element: <RegisterPage/>
  }, 
  {
    path: "login", 
    element: <LoginPage/>
  },
  {
    path: "/dashboard", 
    element: (<ProtectedRoute>
      <Outlet/>
    </ProtectedRoute>),
    children: [ 
      {
        path: "create", 
        element: <CreateShortLink/>
      }, 
      { 
        path: "my-link", 
        element: <MyLinksPage/>
      },
      { 
        path: "profile",
        element: <ProfilePage/>
      }
    ]
  },
  { 
    path: "/:slug",
    element: <RedirectPage/>
  },
  { 
    path: "/",
    element: <HomePage/>
  }, 
  {
    path: "*",
    element: <NotFound/>
  }
]);