import { LuSearch } from "react-icons/lu";

const AdminInput = ({search, handleSearch}) => {
    return (
        <div className="flex justify-center py-5">
        <div className="flex items-center bg-[#0000000f] gap-1 h-[45px] w-[700px] rounded-lg py-[8px] pl-[13px] pr-[8px]">
          <LuSearch className="text-lg mr-1" />
          <input
            type="text"
            className="w-full h-full bg-transparent outline-none text-lg"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
    )
}

export default AdminInput



