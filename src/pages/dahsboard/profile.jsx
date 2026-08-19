import { Bell, Link2, Shield } from "lucide-react";
import Header from "../../components/common/header";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function ProfilePage() {
  const { logout } = useContext(AuthContext)
  return (
    <div className="min-h-screen flex gap-12 flex-col">
      <Header />
      <div className="w-full max-w-2xl mx-auto flex justify-center bg-white rounded-lg p-4 flex-col gap-4 border border-black/20">
        <div className="w-full flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <div className="text-xs rounded-full bg-blue-300 px-2 py-0.5 font-medium items-center flex">
            PRO MEMBER
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-24 h-24 rounded-xl bg-blue-500"></div>
          <div>
            <h1 className="font-semibold">Alex Thompson</h1>
            <p>Product Architect at Digital Flow</p>
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <div className="bg-black/10 p-4 flex-1 rounded-lg">
            <h1 className="font-medium">EMAIL ADDRESS</h1>
            <span className="text-sm">user@mail.com</span>
          </div>
          <div className="bg-black/10 p-4 flex-1 rounded-lg">
            <h1 className="font-semibold">ACCOUNT TENTURE</h1>
            <span className="text-sm">Member Since: January 1, 2026</span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-blue-700 p-4 rounded-lg text-white">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-2 rounded-lg">
              <Link2/>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">ACTIVE LINKS</span>
              <span className="font-black text-2xl">12</span>
            </div>
          </div>
          <div className="items-center flex">
            <div className="text-sm bg-white/10 border border-white/20 py-2 px-4 rounded-lg">VIEW LINKES</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Bell size={18}/>
              <span>Email Notification</span>
            </div>
            <div className="rounded-full h-5 w-10 bg-blue-700 flex items-center px-1">
              <div className="rounded-full bg-white h-4 w-4"> </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Shield size={18}/>
              <span>Two-Factor Authentication</span>
            </div>
            <span className="text-red-500 text-xs font-medium">DISABLED</span>
          </div>
        </div>


        <button className="bg-black/10 p-2 flex-1 rounded-lg cursor-pointer" onClick={() => logout()}>Logout Session</button>
      </div>
    </div>
  );
}