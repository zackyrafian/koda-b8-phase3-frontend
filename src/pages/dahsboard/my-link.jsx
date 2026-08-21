import { Calendar, Copy, Link2, ListFilter, Search, Trash } from "lucide-react";
import { useContext, useEffect, useState, useRef} from "react";
import Header from "../../components/common/header";
import { AuthContext } from "../../context/authContext";
import { formatDate } from "../../utils/format";
import toast from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";

export default function MyLinksPage() { 
  const { token } = useContext(AuthContext);
  const [slugs, setSlugs] = useState([]); 
  const [pagination, setPagination] = useState({})
  const [searchParams, setSearchParams] = useSearchParams(); 
  const search = searchParams.get('search') || ''; 
  const page = parseInt(searchParams.get('page') || 1)
  const limit = parseInt(searchParams.get('limit') || 5)
  const [query, setQuery] = useState(search);

  useEffect(() => { 
    if (query === search) return;
    const timer = setTimeout(() => { 
      setSearchParams({ page: 1, limit, search: query }); 
    }, 500)
    return () => clearTimeout(timer); 
  }, [query])
  console.log(pagination)
  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        const params = new URLSearchParams({
          search,
          page,
          limit,
        })
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/links?${params.toString()}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (!res.ok) throw new Error("Failed fetch");
        const data = await res.json();
        setSlugs(data.results);
        setPagination(data.pagination)
      } catch (e) {
        console.error(e.message)
      }
    })();
  }, [search, page, limit, token])

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

  const handleChangePage = (p) => { 
    setSearchParams({page: p, limit, search})
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
              <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" className="outline-none" placeholder="Search name or URL"/>
            </div>
            <ListFilter size={18}/>
          </div>
  
          <div className="flex flex-col gap-2">
            {slugs?.map((slug) => ( 
              <div key={slug.id} className="p-4 bg-white border border-black/20 rounded-lg flex justify-between items-center">
                <div className="max-w-lg">
                  <div className="flex gap-2 text-blue-800 items-center">
                    <Link2 size={18}/>
                    <Link to={`/${slug.slug}`} className="font-bold">{window.location.host}/{slug.slug}</Link>
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


          <div className="flex gap-2">
            {Array.from({ length: pagination?.totalPages || 0 }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => handleChangePage(p)}
                className="text-sm border px-2 py-0.5 border-black/30 bg-white rounded-md"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}