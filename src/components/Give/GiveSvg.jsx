import headingLine from "../../assets/images/headingLine.png";
import EllipsegiveTab from "../../assets/images/Ellipsegive-desk.png";
import headingLineTab from "../../assets/images/headingLineTab.png";
const GiveSvg = () => {
  return (
    <section className="overflow-hidden  h-[55vh] md:h-full md:pb-[400px] lg:h-[60vh] 2xl:h-[85vh] ">
      <section className="relative">
        <div
          className="w-full h-full absolute bottom-[-140px] z-[-1000] 
        right-[50px] md:top-[60px] md:left-0  lg:left-[-100px]"
        >
          <div className="">
            {/* Mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
              className="md:hidden"
            >
              <circle
                cx="33.5"
                cy="33.5"
                r="32"
                stroke="#FD9F2B"
                strokeWidth="1.77923"
                strokeDasharray="3.56 3.56"
              />
            </svg>

            {/* Tab */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="133"
              viewBox="0 0 36 133"
              fill="none"
              className="hidden md:block lg:hidden"
            >
              <circle
                cx="-30.2357"
                cy="66.5593"
                r="63.9869"
                stroke="#FD9F2B"
                strokeWidth="3.55483"
                strokeDasharray="7.11 7.11"
              />
            </svg>

            {/* Desktop */}

            <img src={EllipsegiveTab} className="hidden lg:block w-[175px]" />
          </div>
        </div>

        <div className="w-full h-full  absolute px-6 -z-50  top-[20px] left-[-10px] md:top-[68px] md:pr-[80px] md:left-[8px] lg:pr-[140px] lg:left-[45px]">
          <div className="">
            <img src={headingLine} className="h-[370px] w-[100vw] pr-[5vw]  md:hidden" />
            <img src={headingLineTab} className="hidden  md:block pr-[5vw] " />
          </div>
        </div>
        <div className="flex justify-center items-center   pt-[20px] px-[10px] absolute inset-0 top-[180px] z-[1000] md:top-[10vw] lg:top-[15vw]">
          <div className=" flex justify-center">
            <div className="w-[80vw] pt-[40px] px-[17px] md:pt-[150px] md:w-[75vw] md:px-[30px] lg:w-[65vw]">
              <p className="text-sm font-inter italic leading-[145%] md:text-base  lg:text-lg lg:leading-[30px]">
                <span className="text-sm italic leading-[145%] font-bold font-inter md:text-base">
                  “Honor the Lord with your wealth and with the first fruits of
                  all your produce; then your barns will be filled with plenty,
                  and your vats will be bursting with wine.”
                </span>{" "}
                Proverbs 3:9-10. Giving is an act of worship. It reflects your
                gratitude, trust, and obedience to God. Whether it's your tithe,
                offering, or a seed of faith, every gift is a statement that God
                is your Source. We encourage you to give prayerfully and
                purposefully. As the Apostle Paul wrote,{" "}
                <span className="text-sm italic leading-[145%] font-bold font-inter md:text-base ">
                  “Whoever sows generously will also reap generously”
                </span>{" "}
                (2 Corinthians 9:6).
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GiveSvg;
