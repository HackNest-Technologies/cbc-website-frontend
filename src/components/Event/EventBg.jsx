import EventBgDark from "../../assets/images/give.png";
import SearchInput from "./SearchInput";
const EventBg = () => {
  return (
    <section className="px-2">
      {/* Background container */}
      <div className="relative">
        {/* Image positioned absolutely within the background */}
        <div className="">
          <img
            src={EventBgDark}
            className="generalBg-heading w-full object-cover rounded-[8px] h-[302px]  md:rounded-[16px] md:h-[348px] lg:h-[495px]"
            alt="Give background image"
          />
          <div className="absolute inset-0  flex justify-center items-center text-[#ffffff] z-[100]">
            <h2 className="text-[40px] leading-[100%] uppercase font-satoshi md:text-[64px]">
              Events{" "}
            </h2>
          </div>

          <div className="absolute inset-0 top-[210px]  flex justify-center items-center text-[#ffffff] z-[100]">
            <SearchInput
              wrapperWidth="border-[#ffffff] rounded-[23.89px] gap-1 w-[290px] h-[38px]  py-[8px]  px-[8.87px]  md:py-[11.14px] px-[22.28px] md:border-2 md:w-[635px] md:h-[65px] md:rounded-[100px] md:px-32px md:py-[16px]"
              pholder="Search Product"
              glass="text-[#ffffff] text-lg md:text-[30px] lg:mr-1"
              input="text-[#fff]  placeholder-white outline-none  px-1 text-lg"
            />
          </div>
        </div>
        <div className="absolute inset-0 opacity-70 bg-[#000] rounded-[8px]"></div>
      </div>
    </section>
  );
};

export default EventBg;
