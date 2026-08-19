import { ArrowLeft, Eye, Link2, Zap, Check, Copy, X, LucideSave } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/common/header";
import { AuthContext } from "../../context/authContext";
const API = "http://localhost:2020"
export default function CreateShortLink() { 
  const [slug, setSlug] = useState(""); 
  const [showModal, setShowModal] = useState(false);
  const [createdLink, setCreatedLink] = useState("");
  const [copied, setCopied] = useState(false);
  const { token } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const data = Object.fromEntries(new FormData(e.target)); 
    try {
      const res = await fetch(`${API}/links`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      
      if (!res.ok) {
        throw new Error("Failed to create link");
      }
      
      const result = await res.json();
      const shortLink = `${window.location.origin}/${result.results.slug}`;
      setCreatedLink(shortLink);
      setShowModal(true);
      e.target.reset();
      setSlug("");
      
    } catch (e) { 
      console.log(e.message)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(createdLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  const closeModal = () => {
    setShowModal(false);
    setCopied(false);
  }

  return ( 
    <>
      <Header/>
      <div className="flex flex-col items-center pt-12 min-w-screen min-h-screen gap-4">
        <div className="min-w-2xl max-w-2xl flex-col gap-4 flex">
          <Link to={"/dashboard"} className="flex gap-2 text-blue-700">
            <ArrowLeft/>
            <span>Back to dashboard</span>
          </Link>
          <div>
            <h1 className="text-2xl">Create New Short Link</h1>
            <p>Transform your long URLs into clean, manageable assets.</p>
          </div>
          <form action="" onSubmit={handleSubmit} className="bg-white rounded-lg border-black/20 border p-4 flex flex-col gap-4 my-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="">DESTINATION URL *</label>
              <div className="flex flex-col">
                <div className="p-2 rounded-lg border border-black/20 bg-black/3 flex gap-2 items-center">
                  <Link2 size={18}/>
                  <input className="outline-none w-full" placeholder="https://example.com/your-long-url-here" name="original_url" type="text" required />
                </div>
              </div>
              <span className="text-[11px] text-gray-500">Ensure your URL starts with http:// or https://</span>
            </div>
            <div className="flex flex-col gap-2"> 
              <label className="font-medium" htmlFor="">CUSTOM SLUG (OPTIONAL)</label>
              <div className="rounded-lg border border-black/20 bg-black/3 flex gap-2 overflow-hidden">
                <div className="p-2 px-4 bg-black/10 h-full">{window.location.host}/</div>
                <input onChange={(e) => {
                  setSlug(e.target.value)
                }} value={slug} className="outline-none w-full" name="slug" placeholder="my-custom-slug" type="text" />
              </div>
              <span className="text-[11px] text-gray-500">Leave blank to generate a random unique identifier.</span>
            </div>
            <div className="flex flex-col gap bg-blue-700/10 p-4 border border-blue-700/20 rounded-lg">
              <div className="flex gap-2 items-center text-blue-800">
                <Eye size={16}/>
                <span className="font-medium text-sm">LIVE PREVIEW</span>
              </div>
              <p className="text-sm pl-6">Your short link will be: <span className="text-blue-800">{window.location.host}/{slug || "random-slug"}</span></p>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="flex items-center gap-2 py-2 bg-blue-700 text-white rounded-lg px-6">
                <Zap size={16}/>
                <span className="text-sm">Create Link</span>
              </button>
              <button type="button" onClick={() => {
                setSlug("");
              }} className="py-2 rounded-lg px-4 text-sm">Cancel</button>
            </div>
          </form>
  
          <div className="grid grid-cols-2">
            <div className="flex gap-2">
              <div className="rounded-full bg-blue-700 w-10 h-10 flex items-center justify-center text-white">
                <Link2/>
              </div>
              <div className="flex flex-col gap-1.5">
                <span>Easy to Manage</span>
                <span className="text-sm">Track every click, geographical location, <br/>
                and referral source instantly.</span>
              </div>
            </div>
  
            <div className="flex gap-2">
              <div className="rounded-full bg-blue-700 w-10 h-10 flex items-center justify-center text-white">
                <LucideSave/>
              </div>
              <div className="flex flex-col gap-1.5">
                <span>Reliable & Secure</span>
                <span className="text-sm">Track every click, geographical location, <br/>
                and referral source instantly.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div onClick={() => setShowModal(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Check size={24} className="text-blue-600" />
                </div>
                <h2 className="font-semibold">Link Created Successfully!</h2>
              </div>
            </div>
            
            <p className="text-gray-600 text-xs mb-4">Your short link is ready to use:</p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 mb-4 flex items-center justify-between gap-2">
              <span className="text-blue-700 font-medium truncate">{createdLink}</span>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-1 bg-blue-700 text-white px-2 py-1.5 rounded-md"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                  </>
                )}
              </button>
            </div>

            <div className="flex gap-3">
              <Link 
                to="/dashboard/my-link" 
                className="flex-1 bg-blue-700 text-white py-2 px-4 rounded-lg text-center text-sm"
              >
                View My Links
              </Link>
              <button 
                onClick={closeModal}
                className="flex-1 border border-gray-300 py-2 px-4 rounded-lg text-sm"
              >
                Create Another
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}