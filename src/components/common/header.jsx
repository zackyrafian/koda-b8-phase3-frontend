import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() { 
  return (
    <div className="bg-white border-b border-b-black/20 shadow-md flex justify-between">
      <div className="px-4 py-4 flex items-center gap-4">
        <div className="font-bold text-2xl">ShortLink</div>
        <div className="flex gap-4 mt-1">
          <span>Dashboard</span>
          <span>Analytics</span>
          <span>Links</span>
        </div>
      </div>

      <div className="p-4 flex gap-4 items-center">
        <Link to={"/dashboard/create"}>
          <div className="bg-blue-700 py-2 px-4 rounded-md text-white text-sm flex gap-2 items-center">
            <Plus size={18} />
            <span>Create New Link</span>
          </div>
        </Link>
        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
      </div>
    </div>
  )
}