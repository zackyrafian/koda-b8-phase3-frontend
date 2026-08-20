import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";

export default function LoginPage() { 
  const navigate = useNavigate(); 
  const { setToken } = useContext(AuthContext)
  const handleSubmit = async (e) => { 
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target)) 
    try { 
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/login`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })
    
      const responseData = await res.json();
      if (!res.ok) { 
        throw new Error(responseData.message)
      }
      setToken(responseData.results.token)
      toast.success(responseData.message)
      navigate("/")
    } catch (e) { 
      console.log(e.message)
      toast.error(e.message)
    }
  }
  return ( 
    <div className="flex min-h-screen items-center justify-center flex-col gap-8">
      <h1 className="text-2xl font-bold">ShortLink</h1>

      <form onSubmit={handleSubmit} action="" className="bg-white border-black/20 border shadow-sm p-8 flex gap-4 flex-col min-w-1/3 rounded-lg"> 
        <div className="mb-4">
          <h1 className="text-2xl font-medium">Welcome Back</h1>
          <p>Please enter your details to sign in.</p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="">Email Address</label>
          <input name="email" className="px-4 py-2 border border-black/20 rounded-lg" type="email" />
        </div>
        <div className="flex flex-col">
          <div className="justify-between flex">
            <label className="text-sm" htmlFor="">Password</label>
            <span className="text-sm">Forget Passsword?</span>
          </div>
          <input name="password" className="px-4 py-2 border border-black/20 rounded-lg" type="password" />
        </div>
        <button className="flex items-center justify-center bg-blue-700 p-2 rounded-lg text-white">Log In</button>
      </form>
      <div>
        <span className="text-sm">Already have an account? <Link to={"/login"}>Sign Up</Link></span>
      </div>
    </div>
  )
}