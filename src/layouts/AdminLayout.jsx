import { Outlet } from "react-router-dom"
import AdminNav from "../components/Admin/AdminNav"

const AdminLayout = () => {
  return (
    <div className="flex h-[100vh]">
     <AdminNav/>
     <Outlet/> 
    </div>
  )
}

export default AdminLayout
