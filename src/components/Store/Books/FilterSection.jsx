import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../redux/bookSlice";

const FilterSection = () => {
  const { filter } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const filterTypes = ["All", "Audios", "Books", "Liked"];

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="flex justify-end mb-4 md:hidden">
        <select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          className="border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {filterTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Filter Buttons */}
      <div className="hidden md:flex gap-3 mb-6">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => dispatch(setFilter(type))}
            className={`rounded-[30px] py-[15px] px-[24px] border border-[#4E4E4E] text-[24px] font-inter leading-[100%] transition-all duration-300 ${
              filter === type
                ? "bg-[#FD9F2B] text-white border-none"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterSection;