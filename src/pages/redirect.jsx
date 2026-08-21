import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/not-found";

export default function RedirectPage() { 
  const { slug } = useParams(); 
  const [notFound, setNotFound] = useState(false)
  useEffect(() => { 
    const fetchRedirect = async () => { 
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${slug}`, { 
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