import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const API = "http://localhost:2020"

export default function LoginPage() { 
  const navigate = useNavigate(); 
  const { setToken } = useContext(AuthContext)
  const handleSubmit = async (e) => { 
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target)) 
    try { 
      const res = await fetch(`${API}/auth/login`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })
      if (!res.ok) { 
        throw new Error("Failed fetch data.")
      }
      const responseData = await res.json();
      setToken(responseData.results.token)
      navigate("/")
    } catch (e) { 
      console.log(e.message)
    }
  }
  return ( 
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <div>Login</div>

      <form onSubmit={handleSubmit} action="" className="flex gap-2 flex-col min-w-1/4"> 
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input name="email" className="px-4 py-2 border rounded-xl" type="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input name="password" className="px-4 py-2 border rounded-xl" type="password" />
        </div>
        <button className="flex items-center justify-center">Sign Up</button>
      </form>
      <div>
        <span>Already have an account? <Link to={"/login"}>Register</Link></span>
      </div>
    </div>
  )
}