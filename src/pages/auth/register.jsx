import { Link, useNavigate } from "react-router-dom";
import { Link2 } from "lucide-react"
import toast from "react-hot-toast";

export default function RegisterPage() { 
  const navigate = useNavigate();
  const handleSubmit = async (e) => { 
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target)) 
    console.log(data)
    try { 
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/register`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })
      const responsetData = await res.json();
      toast.success(responsetData.message)
      navigate('/login')
      e.target.reset();
    } catch (e) { 
      console.log(e.message)
      toast.error(e.message)
    }
  }
  return ( 
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <div className="items-center justify-center flex flex-col gap-2 mb-6">
        <div className="rounded-full bg-blue-700/20 px-4 mb-4">
          <Link2 size={48} strokeWidth={3} className="text-blue-700"/>
        </div>
        <h1 className="text-3xl font-medium">Create Account</h1>
        <span>Join the elite architects of the web.</span>
      </div>

      <form onSubmit={handleSubmit} action="" className="flex gap-4 flex-col min-w-1/3 bg-white rounded-lg p-8 border-black/20 border"> 
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="">Email Address</label>
          <input name="email" className="px-4 py-2 border border-black/10 bg-black/3 rounded-lg" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="">Password</label>
          <div className="flex flex-col gap-1">
            <input name="password" className="px-4 py-2 border border-black/10 bg-black/3 rounded-lg" type="password" />
            <span className="text-xs text-gray-700/80">MINIMUM 6 CHARACTERS</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="">Confirm Password</label>
          <input name="confirm_password" className="px-4 py-2 border border-black/10 bg-black/3 rounded-lg" type="password" />
        </div>
        <button className="text-white flex items-center justify-center bg-blue-700 p-2 rounded-lg">Sign Up</button>
        <span className="text-xs text-center">By signing up, you agree to our Terms of Service and Privacy Policy</span>
      </form>
      <div>
        <span>Already have an account? <Link to={"/login"}>Log In</Link></span>
      </div>
    </div>
  )
}