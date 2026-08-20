import { Check, Link2 } from "lucide-react";
import Header from "../components/common/header";

export default function HomePage() { 
  return ( 
    <div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center flex-col gap-8 my-auto">
          
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-black">Shorten URLs. <span className="text-blue-700"> Share Easily.</span></h1>
            <p className="text-center text-xl">Create short, memorable links for your team communications. <br/>
            Transform long, cumbersome URLs into powerful digital assets that <br/>
            drive engagement.</p>
          </div>
    
          <div className="flex gap-4">
            <button className="bg-blue-700 px-4 py-2 text-white rounded-lg">Get Started</button>
            <button>Learn More</button>
          </div>
    
          <div className="bg-white border border-black/10 shadow-md min-w-1/2 flex items-center py-2 px-4 rounded-lg gap-4">
            <Link2 size={28}/>
            <input placeholder="https://google.com" className="w-full outline-none" type="text" />
            <button className="bg-blue-700 px-4 py-2 rounded-lg text-white">Shorten</button>
          </div>
        </div>
      </div>

      <div className="px-32 pb-20 flex flex-col gap-4">
        <span className="text-blue-700">ARCHITECTURAL FEATURES</span>
        <h1 className="text-2xl font-black">Built for Enterprise Precision</h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white border border-black/15 shadow-md p-4 rounded-lg flex flex-col gap-2">
            <header className="bg-blue-500 w-12 h-12 rounded-lg"></header>
            <h1 className="font-bold">Custom Slugs</h1>
            <span className="text-sm">Instantly generate high-performance short
            links with a single click or through our
            surgical API endpoints.</span>
          </div>
          <div className="bg-white border border-black/15 shadow-md p-4 rounded-lg flex flex-col gap-2">
            <header className="bg-blue-500 w-12 h-12 rounded-lg"></header>
            <h1 className="font-bold">Custom Slugs</h1>
            <span className="text-sm">Instantly generate high-performance short
            links with a single click or through our
            surgical API endpoints.</span>
          </div>
          <div className="bg-white border border-black/15 shadow-md p-4 rounded-lg flex flex-col gap-2">
            <header className="bg-blue-500 w-12 h-12 rounded-lg"></header>
            <h1 className="font-bold">Custom Slugs</h1>
            <span className="text-sm">Instantly generate high-performance short
            links with a single click or through our
            surgical API endpoints.</span>
          </div>
          <div className="bg-white border border-black/15 shadow-md p-4 rounded-lg flex flex-col gap-2">
            <header className="bg-blue-500 w-12 h-12 rounded-lg"></header>
            <h1 className="font-bold">Custom Slugs</h1>
            <span className="text-sm">Instantly generate high-performance short
            links with a single click or through our
            surgical API endpoints.</span>
          </div>
        </div>
      </div>

      <div className="bg-white min-w-full px-32 py-20 flex gap-4">
        <div className="flex-1">
          <img className="rounded-lg" src="home.png" alt="home" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <span>DATA DRIVEN INSIGHTS</span>
          <span className="text-3xl font-extrabold">Observe your link architecture in real-
            time.</span>
          <span>Every click is a data point. Our dashboard provides surgical precision into
          where your traffic originates, who is engaging, and how your team
            communications are performing across the globe.</span>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-5 h-5 bg-blue-700 flex items-center justify-center text-white"><Check size={14}/></div>
              <span>Geographic Distribution Maps</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-5 h-5 bg-blue-700 flex items-center justify-center text-white"><Check size={14}/></div>
              <span>Geographic Distribution Maps</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-5 h-5 bg-blue-700 flex items-center justify-center text-white"><Check size={14}/></div>
              <span>Geographic Distribution Maps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}