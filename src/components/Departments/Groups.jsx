import SearchInput from "../Event/SearchInput";
import DepartmentCard from "./DepartmentCard";
import departments from "../../data/departmentsData";
import { useState } from "react";

const Groups = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const FilterDepartment = departments.filter((item) =>
    item.department.toLowerCase().includes(search)
  );
  return (
    <section>
      <div className="container mx-auto pt-[120px]">
        <SearchInput
          pholder="Search group"
          input="text-[#000000] outline-none  px-1 text-lg"
          glass="text-black text-lg md:text-[30px] lg:mr-1"
          wrapperWidth="border-[#000000] rounded-[23.89px] gap-1 w-[290px] h-[38px]  py-[8px]  px-[8.87px] md:w-[899px] md:h-[65px] md:rounded-[100px] md:px-32px md:py-[16px]"
          handleSearch={handleSearch}
          search={search}
        />
      </div>
      <DepartmentCard departments={FilterDepartment} />
    </section>
  );
};

export default Groups;
