// components/EventSearch.jsx
import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";

const EventSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="absolute inset-0 top-[210px] flex justify-center items-center text-[#ffffff] z-[100]">
      <SearchInput
        search={searchTerm}
        handleSearch={handleSearchChange}
        wrapperWidth="border-[#ffffff] rounded-[23.89px] gap-1 w-[290px] h-[38px] py-[8px] px-[8.87px] md:border-2 md:w-[635px] md:h-[65px] md:rounded-[100px]"
        pholder="Search events..."
        glass="text-[#ffffff] text-lg md:text-[30px] lg:mr-1"
        input="text-[#fff] placeholder-white outline-none px-1 text-lg bg-transparent"
      />
    </div>
  );
};

export default EventSearch;