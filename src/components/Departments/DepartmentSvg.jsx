import headingLine from "../../assets/images/headingLine.png";
import EllipsegiveTab from "../../assets/images/Ellipsegive-desk.png";
import headingLineTab from "../../assets/images/headingLineTab.png";

const DepartmentSvg = () => {
  return (
    <section
      className="
        overflow-visible md:overflow-hidden
        md:pb-[60px]
        lg:min-h-[60dvh] 2xl:min-h-[85dvh]
      "
    >
      <section className="relative">
        {/* Decorative circle / ellipse (can stay absolute) */}
        <div
          className="
            w-full h-full absolute bottom-[-140px] z-[-1000]
            right-[46px] md:top-[65px] md:left-0 lg:left-[-100px]
          "
        >
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

        {/* Heading lines  */}
        <div
          className="
            w-full -z-50 h-full absolute px-6 pr-[10vw]
            top-[20px] md:top-[68px] md:pr-[100px] md:left-[8px]
            lg:pr-[140px] lg:left-[45px]
          "
        >
          <img src={headingLine} className="h-[370px] w-[100vw] md:hidden" />
          <img src={headingLineTab} className="hidden md:block" />
        </div>

        {/* CONTENT: make it relative (NOT absolute) so it stays in flow */}
        <div
          className="
            relative z-[1000]
            flex justify-center
            pt-[20px]  px-[10px]
          "
        >
          <div className="flex justify-center">
            <div className="w-[80vw] pt-[5vw] min-[420px]:pt-[10vw] px-[25px] md:pt-[10vw] md:px-0 md:pl-[90px] md:pr-[20px] lg:mt-[6vw]  2xl:pt-[250px]  lg:w-[65vw]">
              <p className="text-sm font-inter italic leading-[145%] md:text-base lg:text-lg lg:leading-[30px]">
                At Calvary, serving is how we grow, connect, and reveal Christ.
                Whether you're drawn to ushering, sound, or nu Media, there's a
                place for your gifts. Our departments ensure excellence in
                worship and order, while our fellowship groups build community
                around shared journeys and purpose. Through heartfelt service
                and deep connections, we nurture gifts, sharpen one another, and
                align our lives with God's will. Here, we build each other, live
                purposefully, and serve with joyful excellence. Find your fit,
                take your place, and flourish in purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DepartmentSvg;
