import EventBgDark from "../../assets/images/give.png";
import CircularText from "../../utils/CircularText";

const FellowshipBg = () => {
  return (
    <section>
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
              <h2 className="text-[30px] leading-[100%] uppercase font-satoshi md:text-[64px]">
                House fellowship
              </h2>
            </div>
          </div>
          <div
            className="absolute bottom-[-30px] right-[40px]  
             md:bottom-[-60px] md:right-[30px] 
             lg:bottom-[-100px] lg:right-[60px]"
          >
           <CircularText/>
          </div>
          <div className="absolute inset-0 bg-[#000] rounded-[8px] -z-50"></div>
        </div>
      </section>
    </section>
  );
};

export default FellowshipBg;
