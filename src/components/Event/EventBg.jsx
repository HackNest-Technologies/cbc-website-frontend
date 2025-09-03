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
            className="w-full object-cover rounded-[8px] h-[302px]  md:rounded-[16px] md:h-[348px] lg:h-[495px]"
            alt="Give background image"
          />
          <div className="absolute inset-0  flex justify-center items-center text-[#ffffff] z-[100]">
            <h2 className="text-[40px] leading-[100%] uppercase font-satoshi md:text-[64px]">
              Events{" "}
            </h2>
          </div>

          <div className="absolute inset-0 top-[210px]  flex justify-center items-center text-[#ffffff] z-[100]">
            <SearchInput/>
          </div>
        </div>
        <div className="absolute inset-0 opacity-70 bg-[#000] rounded-[8px]"></div>
      </div>
    </section>
  );
};

export default EventBg;
