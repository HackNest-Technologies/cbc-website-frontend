import { BiCalendar } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import eventScene from "../../assets/images/event-scene.png";
import EventLine from "../../assets/images/EventLine.png";
import EventCircle from "../../assets/images/EventCircle.png";

const UpcomingEvents = () => {
  const events = [
    {
      theme: "The entrepreneurship academy",
      date: "Monday 20th- Saturday 25th January",
      time: "8am - 2pm",
      description:
        "There is a Divine Call to Create, Build, and Prosper for the Glory of God. At Calvary Bible Church, we believe that business is more than profit - it is a Kingdom Mandate. This is a space where visionaries, builders, and purpose-driven leaders are trained, equipped, and sent forth to “occupy until He comes” (Luke 19:13). Come, be equipped. come, be commissioned. The Earth awaits your manifestation.",
    },
    {
      theme: "The entrepreneurship academy",
      date: "Monday 20th- Saturday 25th January",
      time: "8am - 2pm",
      description:
        "There is a Divine Call to Create, Build, and Prosper for the Glory of God. At Calvary Bible Church, we believe that business is more than profit - it is a Kingdom Mandate. This is a space where visionaries, builders, and purpose-driven leaders are trained, equipped, and sent forth to “occupy until He comes” (Luke 19:13). Come, be equipped. come, be commissioned. The Earth awaits your manifestation.",
    },
  ];

  const EventCard = ({ theme, date, time, description }) => (
    <div className="bg-[#E5E5E5] p-[11.82px] space-y-[15.76px] rounded-[3.94px]  sm:min-w-[540px] md sm:rounded-[8px] gap-4 md:p-[24px] md:mr-[16px] lg:items-center lg:grid lg:grid-cols-2 lg:min-w-[1227px]">
      <img
        src={eventScene}
        alt=""
        className="object-contain rounded-[7.39px] w-full"
      />

      <div className="space-y-2 md:w-[503px]">
        <h4 className="border-b-[0.49px] border-b-[#565656] pb-[3.94px] text-base leading-[100%]  font-satoshi capitalize  sm:text-[32px] md:pt-2">
          {theme}
        </h4>
        <div className="space-y-[7.88px] italic text-[#777777] md:pt-2">
          <p className="flex items-center italic text-xs leading-[100%] capitalize gap-2 md:pt-2 md:text-base">
            <BiCalendar /> {date}
          </p>
          <p className="flex items-center italic text-xs leading-[100%] capitalize gap-2 border-b-[0.49px] border-b-[#565656] pb-[3.94px] md:pt-2 md:text-base">
            <BsClock /> {time}
          </p>
        </div>
        <p className="text-sm leading-[100%] text-[#000000] font-normal font-inter md:text-base md:pt-2">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="relative">
      <section className="container mx-auto p-6 space-y-4 sm:mt-8 md:p-0 md:mb-[60px] md:py-6">
        <div className="flex justify-between">
          <h2 className="font-satoshi text-[24px] leading-[100%] sm:text-[30px] md:text-[40px]  ">
            UPCOMING EVENTS
          </h2>
          <p className="max-sm:hidden">
            <Link
              to="/events"
              className="text-sm font-inter leading-[150%] flex items-center gap-2 underline sm:text-[24px]"
            >
              View All Events{" "}
              <BsArrowRight className="text-[24px] sm:text-[30px]" />
            </Link>
          </p>
        </div>

        <div className="space-y-4  sm:flex sm:flex-nowrap sm:overflow-auto sm:max-w-full sm:gap-2">
          {events.map((ev, i) => (
            <EventCard key={i} {...ev} />
          ))}
          <p className="sm:hidden">
            <Link className="text-[14px] leading-[150%] font-inter flex items-center gap-2 underline">
              View All Events <BsArrowRight size={24} />
            </Link>
          </p>
        </div>
      </section>

      <div className="absolute bottom-[-50px] right-[50px] -z-50">
        <img src={EventLine} alt="" className="w-full" />
      </div>
      <div className="absolute   right-0 bottom-[-120px] -z-50">
        {/* <img src={EventCircle} alt="" className="w-[100px] object-cover"/>  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="164"
          viewBox="0 0 53 164"
          fill="none"
        >
          <circle
            cx="82.0842"
            cy="82.2404"
            r="79.9431"
            stroke="#FD9F2B"
            stroke-width="3.63378"
            stroke-dasharray="7.27 7.27"
          />
        </svg>
      </div>
    </section>
  );
};

export default UpcomingEvents;
