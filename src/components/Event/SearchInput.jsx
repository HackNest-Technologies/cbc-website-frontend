import { LuSearch } from "react-icons/lu";

const SearchInput = ({ search, handleSearch, wrapperWidth, glass, input, pholder }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`flex items-center border ${wrapperWidth}}`}
      >
        <LuSearch className={`${glass}`} />
        <input
          type="text"
          className={`w-full h-full  ${input}`}
          placeholder={`${pholder}`}
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchInput;
