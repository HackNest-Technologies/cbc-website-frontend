import { LiaPraySolid } from "react-icons/lia";
import Button from "../shared/Button.jsx";
import PopupBtn from "../shared/PopupBtn.jsx";

const PrayerRequest = () => (
  <section className="container p-6 mx-auto lg:mt-[50px] md:p-0 md:py-6">
    <div className="border-4 border-dashed border-orange-300 p-4 pr-14 rounded-lg relative space-y-2  mx-auto sm:p-8">
      <LiaPraySolid className="absolute text-[100px] sm:text-[200px] bg-white text-orange-200 -bottom-7.5 -right-7.5" />
      <div className="h-[23.93px] w-[23.93px] sm:w-[65.33px] sm:h-[65.33px] rounded-full border-4 border-orange-300 border-dashed sm:mb-8"></div>
      <h4 className="text-2xl sm:text-[40px] font-semibold font-satoshi max-w-[590px] lg:text-[62px]">
        God Answers Prayers
      </h4>
      <p className="text-xs font-inter sm:text-base max-w-[590px]">
        Prayer is not our last resort—it is our first response. “Call to Me and
        I will answer you” (Jeremiah 33:3). When we pray, God answers in love,
        in power, and in time.
      </p>
 <div className="lg:pt-3">
   <PopupBtn
        text="Submit prayer request"
        className="h-[40px] sm:w-[243px] sm:h-[58px] justify-center sm:text-lg lg:rounded-[50px] lg:py-[16px] lg:px-[24px]"
      />
 </div>
   
    </div>
  </section>
);

export default PrayerRequest;
