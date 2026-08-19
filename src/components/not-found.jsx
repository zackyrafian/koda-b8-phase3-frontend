import { ArrowLeft, Link2Off, ArrowUpRightFromCircle, Blocks, Layers2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() { 
  return ( 
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="rounded-full bg-black/5 flex items-center justify-center w-fit p-8">
          <Link2Off size={52}/>
        </div>
        
        <div className="flex flex-col gap-4 text-center">
          <div className="text-5xl font-black text-blue-700">404</div>
          <div className="font-bold">Page Not Found</div>
          <p className="font-light">The page you're looking for doesn't exist. It may <br/>
          have been moved, deleted, or the link might be <br/>
          broken.</p>
        </div>
  
        <div className="flex gap-2 items-center justify-center">
          <Link to={"/"} className="flex bg-blue-700 items-center gap-2 border border-black/20 rounded-lg py-2 px-4 text-sm text-white">
            <ArrowLeft size={18}/>
            <span>Go To Home</span>
          </Link>
          <button className="text-blue-700 bg-white border border-black/20 rounded-lg py-2 px-4 text-sm">
            <span>Report an Issue</span>
          </button>
        </div>
  
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col gap-2 max-w-55 bg-white rounded-lg border border-black/20 p-4">
            <Blocks className="text-blue-700" />
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold">Check Analytics</h1>
              <p className="text-xs">Track your active
              links and traffic
              sources in real-time.</p>
            </div>
          </div>
  
          <div className="flex flex-col gap-2 max-w-55 bg-white rounded-lg border border-black/20 p-4">
            <Layers2 className="text-blue-700" />
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold">New ShortLink</h1>
              <p className="text-xs">Create a brand new
              architected URL in
              seconds.</p>
            </div>
          </div>
  
          <div className="flex flex-col gap-2 max-w-55 bg-white rounded-lg border border-black/20 p-4">
            <ArrowUpRightFromCircle className="text-blue-700"/>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold">Developer API</h1>
              <p className="text-xs">Integrate our link
              infrastructure into
              your apps.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}