import SearchInput from "../Event/SearchInput"
const SermonInput = () => {
  return (
    <section>
  <div className="pt-16 pb-12 lg:pt-[100px] lg:pb-17">
        <SearchInput
          pholder="Search group"
          input="text-[#000000] outline-none  px-1 text-lg"
          glass="text-black text-lg md:text-[30px] lg:mr-1"
          wrapperWidth="border-[#000000] rounded-[23.89px] gap-1 w-[290px] h-[38px]  py-[8px]  px-[8.87px] md:w-[899px] md:h-[65px] md:rounded-[100px] md:px-32px md:py-[16px]"
        //   handleSearch={handleSearch}
        //   search={search}
        />
        </div>

    </section>
  )
}

export default SermonInput