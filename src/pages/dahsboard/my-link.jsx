import { Calendar, Copy, Link2, ListFilter, Search, Trash } from "lucide-react";
import { useContext, useEffect, useState, } from "react";
import Header from "../../components/common/header";
import { AuthContext } from "../../context/authContext";
import { formatDate } from "../../utils/format";
import toast from "react-hot-toast";

export default function MyLinksPage() { 
  const { token } = useContext(AuthContext);
  const [slugs, setSlugs] = useState(); 
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(async() => { 
      (async () => { 
        try {
          const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/links?search=${encodeURIComponent(query)}`, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
          })
  
          if (!res.ok) { 
            throw new Error ("Failed fetch")
          }
          const data = await res.json();
          setSlugs(data.results)
        } catch (e) { 
          console.log(e.message)
        }
      })()
    }, 500)
    return () => clearTimeout(timer)
  }, [query])

  const handleRemove = async (id) => { 
    try { 
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/links/${id}`, { 
        method: "DELETE", 
        headers: { Authorization: `Bearer ${token}` }
      })
      
      if (res.status === 401) { 
        logout();
        return;
      }
      const responseData = await res.json();
      toast.success(responseData.message)
      setSlugs((prev) => prev.filter((slug) => slug.id!== id))
    } catch (error) { 
      console.error(error.message)
    }
  }
  return ( 
    <div className="flex flex-col gap-8">
      <Header/>
      <div className="flex flex-col items-center min-w-screen min-h-screen gap-4">
        <div className="min-w-2xl flex-col gap-4 flex">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-semibold">My Links</h1>
              <p>Manage and track your shortened digital assets.</p>
            </div>
            <div className="text-right">
              <h1 className="text-xl">TOTAL ACTIVE</h1>
              <p className="text-3xl font-semibold ">{slugs?.length}</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg flex gap-3 justify-between border border-black/20 px-4">
            <div className="flex gap-4 items-center">
              <Search size={18}/>
              <input onChange={(e) => setQuery(e.target.value)} type="text" className="outline-none" placeholder="Search name or URL"/>
            </div>
            <ListFilter size={18}/>
          </div>
  
          <div className="flex flex-col gap-2">
            {slugs?.map((slug) => ( 
              <div key={slug.id} className="p-4 bg-white border border-black/20 rounded-lg flex justify-between items-center">
                <div className="max-w-lg">
                  <div className="flex gap-2 text-blue-800">
                    <Link2/>
                    <span className="font-bold">{window.location.host}/{slug.slug}</span>
                  </div>
                  <p title={slug.original_url} className="max-w-2xl truncate text-sm">{slug.original_url}</p>
                  <div className="pt-2 text-xs flex items-center gap-2">
                    <Calendar size={14}/>
                    <span>{formatDate(slug.createdAt)}</span>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className=" text-blue-700 p-1 rounded-md">
                    <Copy size={18} />
                  </div>
                  <button onClick={(e) => {
                    handleRemove(slug.id)
                  }}>
                    <Trash size={18}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}