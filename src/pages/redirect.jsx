import { ArrowLeft, ArrowUpRightFromCircle, Blocks, Layers2, Link2, Link2Off, MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/not-found";

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
    <>
      {notFound && (
        <NotFound/>
      )}
    </>
  )
}