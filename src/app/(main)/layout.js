import '../globals.css'
import dynamic  from "next/dynamic";
const Navbar = dynamic(() => import("@/modules/navbar/index"));

export default function MainLayout({ children }) {
  return (
      <div className="w-full bg-transparent">
        <Navbar />
        {children}
      </div>
  )
}
