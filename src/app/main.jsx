import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { Toaster } from "react-hot-toast"
import { router } from './router';
import { AuthProvider } from '../context/authContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 2000, 
          style: { 
            border: '10px', 
            fontSize: '12px'
          }
        }}
      />
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
