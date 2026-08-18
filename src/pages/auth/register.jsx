import { Link } from "react-router-dom";
const API = "http://localhost:2020"


export default function RegisterPage() { 

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target)) 
    console.log(data)
    try { 
      await fetch(`${API}/auth/register`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })
    } catch (e) { 
      console.log(e.message)
    }
  }
  return ( 
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <div>Create Account</div>

      <form onSubmit={handleSubmit} action="" className="flex gap-2 flex-col min-w-1/4"> 
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input name="email" className="px-4 py-2 border rounded-xl" type="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input name="password" className="px-4 py-2 border rounded-xl" type="password" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Confirm Password</label>
          <input name="confirm_password" className="px-4 py-2 border rounded-xl" type="password" />
        </div>

        <button className="flex items-center justify-center">Sign Up</button>
      </form>
      <div>
        <span>Already have an account? <Link to={"/login"}>Log In</Link></span>
      </div>
    </div>
  )
}