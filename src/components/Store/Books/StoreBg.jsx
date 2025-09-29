import SearchInput from "../../Event/SearchInput";
import EventBgDark from "../../../assets/images/give.png";
import cart from "../../../assets/images/cart.png";

const StoreBg = () => {
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
            <h2 className="text-[20px] leading-[100%] uppercase font-satoshi md:text-[50px] lg:text-[75px]">
              Shop
            </h2>
          </div>

          <div className="absolute inset-0 top-[130px]  flex justify-center items-center text-[#ffffff] z-[100]">
            <div className="flex items-center gap-2">
              <SearchInput
                wrapperWidth="border-[#ffffff] rounded-[23.89px] gap-1 w-[290px] h-[38px]  py-[8px]  px-[8.87px]  md:py-[11.14px] px-[22.28px] md:border-2 md:w-[635px] md:h-[65px] md:rounded-[100px] md:px-32px md:py-[16px]"
                pholder="Search Product"
                glass="text-[#ffffff] text-lg md:text-[30px] lg:mr-1"
                input="text-[#fff]  placeholder-white outline-none  px-1 text-lg"
              />
              <div className="relative">
                <img
                  src={cart}
                  alt=""
                  className="w-[25px] h-[24px] object-cover"
                />
                <p className="absolute bottom-[60%] left-[50%] text-[11px] text-[#fff] font-inter text-center flex justify-center items-center bg-[#FD9F2B] w-[20px] h-[20px] rounded-full p-3">
                  99
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-80 bg-[#000] rounded-[8px]"></div>
      </div>
    </section>
  );
};

export default StoreBg;
