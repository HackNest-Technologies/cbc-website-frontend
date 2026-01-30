import { useEffect, useState } from "react";
import SearchInput from "../Event/SearchInput"
const SermonInput = ({ onSearch }) => {
   const [searchTerm, setSearchTerm] = useState("");

  // Handle search input change
  const handleSearchChange = (value) => {
    // Make sure we're getting just the string value, not the entire event
    if (typeof value === 'string') {
      setSearchTerm(value);
    } else if (value && value.target) {
      // If it's an event object, get the value from target
      setSearchTerm(value.target.value);
    } else {
      // Fallback: convert to string
      setSearchTerm(String(value || ""));
    }
  };

  // Debounce implementation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onSearch) {
        onSearch(searchTerm);
      }
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  return (
    <section>
      <div className="pt-16 pb-12 lg:pt-[100px] lg:pb-17 flex justify-center">
        <SearchInput
          pholder="Search by series title or minister"
          input="text-[#000000] outline-none px-1 text-lg"
          glass="text-black text-lg md:text-[30px] lg:mr-1"
          wrapperWidth="border-[#000000] rounded-[23.89px] gap-1 w-[290px] h-[38px] py-[8px] px-[8.87px] md:w-[899px] md:h-[65px] md:rounded-[100px] md:px-32px md:py-[16px]"
          handleSearch={handleSearchChange}
          search={searchTerm}
        />
      </div>
    </section>

  );
}

export default SermonInput