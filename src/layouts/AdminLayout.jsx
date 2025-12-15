import { Outlet } from "react-router-dom"
import AdminNav from "../components/Admin/AdminNav"

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminNav />
      
      {/* Main Content Area */}
      <main className="flex-1 min-h-screen hide-scrollbar">
        <div className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout