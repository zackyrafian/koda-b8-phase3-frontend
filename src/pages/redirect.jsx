import { ArrowLeft, Link2Off, MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RedirectPage() { 
  const { slug } = useParams(); 
  const [notFound, setNotFound] = useState(false)
  useEffect(() => { 
    const fetchRedirect = async () => { 
      const res = await fetch(`http://localhost:2020/${slug}`, { 
        redirect: 'manual',
      })
      if (res.status === 404) { 
        setNotFound(true)
        return
      }
      window.location.href = res.url
    }
    fetchRedirect();
    
  }, [slug])
  return ( 
    <div className="flex items-center justify-center min-h-screen">
      {notFound && (
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="rounded-full bg-black/5 flex items-center justify-center w-fit p-8">
            <Link2Off size={52}/>
          </div>
          
          <div className="flex flex-col gap-4 text-center">
            <div className="text-5xl font-black">404</div>
            <div className="font-bold">Page Not Found</div>
            <p className="font-light">The page you're looking for doesn't exist. It may <br/>
            have been moved, deleted, or the link might be <br/>
            broken.</p>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <button className="flex items-center gap-2 border border-black/20 rounded-lg py-2 px-4">
              <ArrowLeft/>
              <span>Go To Dashboard</span>
            </button>
            <button className="border border-black/20 rounded-lg py-2 px-4">
              <span>Report an Issue</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col gap-2 max-w-45 bg-white rounded-lg border border-black/20 p-4">
              <ArrowLeft />
              <div>
                <h1 className="font-medium">Check Analytics</h1>
                <span className="text-xs">Track your active
                links and traffic
                sources in real-time.</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-45 bg-white rounded-lg border border-black/20 p-4">
              <ArrowLeft />
              <div>
                <h1 className="font-medium">Check Analytics</h1>
                <span className="text-xs">Track your active
                links and traffic
                sources in real-time.</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-45 bg-white rounded-lg border border-black/20 p-4">
              <ArrowLeft />
              <div>
                <h1 className="font-medium">Check Analytics</h1>
                <span className="text-xs">Track your active
                links and traffic
                sources in real-time.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}