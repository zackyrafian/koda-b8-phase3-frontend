const API = "http://localhost:2020"
export default function CreateShortLink() { 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const data = Object.fromEntries(new FormData(e.target)); 
    try {
      await fetch(`${API}/links`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    } catch (e) { 
      console.log(e.message)
    }
  }
  return ( 
    <div className="flex flex-col items-center justify-center min-w-screen min-h-screen">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">DESTINATION URL *</label>
            <input placeholder="https://example.com/your-long-url-here" name="original_url" type="text" />
          </div>
          <div> 
            <label htmlFor="">CUSTOM SLUG (OPTIONAL)</label>
            <input name="slug" placeholder="my-custom-slug" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span>LIVE PREVIEW</span>
            </div>

            <div>
              <span>Your short link will be: </span>
            </div>
          </div>
          <div className="flex">
            <button type="submit" className="">Create Link</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}