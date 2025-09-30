import { LiaPraySolid } from "react-icons/lia";
import Button from "../shared/Button.jsx";
import PopupBtn from "../shared/PopupBtn.jsx";
import prayerIcon from "../../assets/images/prayerIcon.png";

const PrayerRequest = () => (
  <section className="px-6 pt-10 container mx-auto md:px-0 md:pt-[150px] md:mb-[60px] lg:pt-[200px] lg:mb-0">
    <section className="relative">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="329"
          // height="216"
          viewBox="0 0 329 216"
          fill="none"
          className="lg:hidden"
        >
          <path
            d="M328 122.521V8.99999C328 4.58172 324.418 1 320 1H9C4.58173 1 1 4.58172 1 9V207C1 211.418 4.58172 215 9 215H242.696"
            stroke="#FD9F2B"
            strokeWidth="2"
            strokeDasharray="2.57 2.57"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="897"
          // height="422"
          viewBox="0 0 897 422"
          fill="none"
          className="hidden lg:block"
        >
          <path
            d="M894.904 239.364V16.0504C894.904 8.29059 888.614 2 880.854 2H16.0504C8.29057 2 2 8.29059 2 16.0504V405.95C2 413.709 8.29059 420 16.0504 420H661.973"
            stroke="#FD9F2B"
            strokeWidth="3.51261"
            strokeDasharray="7.03 7.03"
          />
        </svg>
      </div>
      <div>
        <img
          src={prayerIcon}
          alt=""
          className="w-[139px] object-cover h-[168px] absolute  top-[32vw] right-[-11vw] md:w-[337px] md:h-[406px] md:top-[22vw] md:right-[-10vw] lg:top-[10vw] lg:right-[-7vw] lg:w-[486px] lg:h-[585px]"
        />
      </div>
      <section className="w-[80vw] absolute bottom-[20px] px-[16px] md:w-[60vw] md:left-[30px] md:bottom-[12%] lg:w-[45vw] lg:bottom-[5vw]">
        <div className="h-[23.93px] mb-[10px] w-[23.93px] border-[1.286px] sm:w-[65.33px] sm:h-[65.33px] rounded-full md:border-4 border-[#FD9F2B] border-dashed sm:mb-8 md:mb-[100px] lg:mb-[110px]"></div>
        <h4 className="text-2xl sm:text-[40px] font-semibold font-satoshi max-w-[590px] lg:text-[62px]">
          God Answers Prayers
        </h4>
        <p className="text-xs my-2 font-inter sm:text-base max-w-[590px] lg:my-5">
          Prayer is not our last resort—it is our first response. “Call to Me
          and I will answer you” (Jeremiah 33:3). When we pray, God answers in
          love, in power, and in time.
        </p>
        <div className="pt-2 lg:pt-3">
          <PopupBtn
            text="Submit prayer request"
            className="h-[40px] sm:w-[243px] sm:h-[58px] justify-center sm:text-lg lg:rounded-[50px] lg:py-[16px] lg:px-[24px]"
          />
        </div>
      </section>
    </section>
  </section>
);

export default PrayerRequest;
