import { useState, createContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

const TOKEN_KEY = "token";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

  function updateToken(newToken) {
    if (newToken) {
      localStorage.setItem(TOKEN_KEY, newToken);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
    setToken(newToken);
  }

  function logout() { 
    localStorage.removeItem(TOKEN_KEY);
    setToken(null)
  }

  useEffect(() => { 
    if (!token) return;
    const checkExpiry = () => { 
      try { 
        const decodeToken = jwtDecode(token)
        console.log(decodeToken)
        if (decodeToken.exp < Date.now() / 1000) { 
          logout();
        }
      } catch (e) { 
        logout();
      }
    }
    checkExpiry();
    const interval = setInterval(checkExpiry, 60 * 1000); 
    return () => clearInterval(interval)
  }, [token])

  return (
    <AuthContext.Provider value={{ token, setToken: updateToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}