import { LogIn, Plus } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function Header() { 
  const { token } = useContext(AuthContext); 
  return (
    <div className="bg-white border-b border-b-black/20 shadow-md flex justify-between">
      <div className="px-4 py-3 flex items-center gap-4">
        <Link to={"/"} className="font-bold text-2xl">ShortLink</Link>
        {token && (
          <div className="flex gap-4 mt-1">
            <span>Dashboard</span>
            <Link to={"/dashboard/my-link"}>Links</Link>
          </div>
        )}
      </div>

      <div className="px-4 py-3 flex gap-4 items-center">
        {token ? (
          <div className="flex gap-4 items-center">
            <Link to={"/dashboard/create"}>
              <div className="bg-blue-700 py-2 px-4 rounded-md text-white text-sm flex gap-2 items-center">
                <Plus size={18} />
                <span>Create New Link</span>
              </div>
            </Link>
            <Link to={"/dashboard/profile"} className="w-8 h-8 rounded-full bg-blue-700 overflow-hidden">
              <img src="/profile_picture.jpg" alt="profile" />
            </Link>
          </div>
        ) : (
          <div className="flex gap-4">
              <Link to={"/login"} className="bg-blue-700 py-2 px-6 rounded-lg text-sm cursor-pointer text-white flex gap-2 items-center">
                <span>Log In</span>
                <LogIn size={18}/>
              </Link>
          </div>
        )}
      </div>
    </div>
  )
}