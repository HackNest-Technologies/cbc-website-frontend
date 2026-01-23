// import { BiCalendar } from "react-icons/bi";
// import { BsArrowRight, BsClock } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import eventScene from "../../assets/images/event-scene.png";
// import EventLine from "../../assets/images/EventLine.png";
// import { useGetEventQuery } from "../../redux/apiSlice";
// import "./Hero.css";
// import { useEffect, useState } from "react";

// const UpcomingEvents = () => {
//   const { data, isLoading } = useGetEventQuery();
//   const [currentEvents, setCurrentEvents] = useState([]);

//   useEffect(() => {
//     if (data && data.length > 0) {
//       // Sort events by date (ascending - soonest first)
//       const sortedEvents = [...data].sort((a, b) => {
//         // Use start_date for comparison
//         const dateA = new Date(a.start_date);
//         const dateB = new Date(b.start_date);
//         return dateA - dateB; // Ascending order
//       });

//       // Get only upcoming events (events that haven't ended yet)
//       const now = new Date();
//       const upcomingEvents = sortedEvents.filter((event) => {
//         const endDate = new Date(event.end_date);
//         return endDate >= now; // Only include events that haven't ended
//       });
//       console.log("All events:", data.length);
//       console.log("Upcoming events:", upcomingEvents.length);

//       // Get the first 2 upcoming events
//       setCurrentEvents(upcomingEvents.slice(0, 2));
//     } else {
//       setCurrentEvents([]);
//     }
//   }, [data]);

//   // Simple date formatting function - FIXED VERSION
//   const formatDateRange = (startDate, endDate) => {
//     if (!startDate || !endDate) return "";

//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];

//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     const startDay = start.getDate();
//     const endDay = end.getDate();
//     const startMonth = months[start.getMonth()];
//     const endMonth = months[end.getMonth()];

//     // Simple ordinal suffix
//     const getSuffix = (day) => {
//       if (day > 3 && day < 21) return "th";
//       switch (day % 10) {
//         case 1:
//           return "st";
//         case 2:
//           return "nd";
//         case 3:
//           return "rd";
//         default:
//           return "th";
//       }
//     };

//     // Check if same month
//     if (startMonth === endMonth) {
//       return `${startDay}${getSuffix(startDay)} - ${endDay}${getSuffix(
//         endDay,
//       )} ${endMonth}`;
//     } else {
//       return `${startDay}${getSuffix(
//         startDay,
//       )} ${startMonth} - ${endDay}${getSuffix(endDay)} ${endMonth}`;
//     }
//   };

//   const EventCard = ({
//     cover_image,
//     title,
//     start_date,
//     end_date,
//     time,
//     description,
//   }) => (
//     <div className="bg-[#E5E5E5] p-[11.82px] space-y-[15.76px] rounded-[3.94px] sm:min-w-[540px] lg:min-w-[1105px] sm:rounded-[8px] md:p-[24px] md:mr-[16px] lg:items-center lg:grid gap-5 lg:grid-cols-2 xl:min-w-[1227px]">
//       <img
//         src={cover_image || eventScene} // Use API image if available
//         alt={title}
//         className="object-cover rounded-[7.39px] w-full lg:h-[270px]"
//         onError={(e) => {
//           // Fallback to default image if API image fails to load
//           e.target.src = eventScene;
//         }}
//       />

//       <div className="space-y-2 md:w-[503px] ">
//         <h4 className="border-b-[0.49px] border-b-[#565656] pb-[3.94px] text-base leading-[100%] font-satoshi capitalize sm:text-[32px] md:pt-2 lg:text-[26px] lg:pb-[10px] xl:text-[32px] ">
//           {title}
//         </h4>
//         <div className="space-y-[7.88px] italic text-[#777777] md:pt-2 lg:pb-[5px]">
//           <p className="flex items-center italic text-xs leading-[100%] capitalize gap-2 md:pt-2 md:text-base xl:text-base">
//             <BiCalendar /> {formatDateRange(start_date, end_date)}
//           </p>
//           <p className="flex items-center italic text-xs leading-[100%] capitalize gap-2 border-b-[0.49px] border-b-[#565656] pb-[3.94px] md:pt-2 md:text-base lg:text-sm lg:pb-[8px] xl:text-base">
//             <BsClock /> {time}
//           </p>
//         </div>
//         <p className="text-sm leading-[100%] text-[#000000] font-normal font-inter md:text-base md:pt-2 lg:text-sm lg:leading-[110%] xl:text-base">
//           {description}
//         </p>
//       </div>
//     </div>
//   );

//   // Show loading state
//   if (isLoading) {
//     return (
//       <section className="relative lg:pt-20">
//         <section className="container mx-auto p-6 space-y-4 sm:mt-8 md:p-0 md:mb-[60px] md:py-6 ">
//           <div className="flex justify-between lg:py-5">
//             <h2 className="event-heading font-satoshi leading-[1] text-[clamp(24px,2.4vw,40px)]">
//               UPCOMING EVENTS
//             </h2>
//           </div>
//           <div className="text-center py-8">
//             <p>Loading events...</p>
//           </div>
//         </section>
//       </section>
//     );
//   }

//   return (
//     <section className="relative lg:pt-20">
//       <section className="container mx-auto p-6 space-y-4 sm:mt-8 md:p-0 md:mb-[60px] md:py-6 ">
//         <div className="flex justify-between lg:py-5">
//           <h2 className="event-heading font-satoshi leading-[1] text-[clamp(24px,2.4vw,40px)]">
//             UPCOMING EVENTS
//           </h2>

//           <p className="max-sm:hidden">
//             <Link
//               to="/events"
//               className="event-heading font-inter leading-[1.5] flex items-center gap-2 underline text-[clamp(14px,2vw,40px)]"
//             >
//               View All Events
//               <BsArrowRight className="text-[clamp(20px,2.5vw,30px)]" />
//             </Link>
//           </p>
//         </div>

//         {currentEvents.length === 0 ? (
//           <div className="text-center py-8">
//             <p>No upcoming events at the moment. Check back soon!</p>
//           </div>
//         ) : (
//           <div className="hide-scrollbar space-y-4 sm:flex sm:flex-nowrap sm:overflow-auto sm:max-w-full sm:gap-2">
//             {currentEvents.map((ev, i) => (
//               <EventCard key={i} {...ev} />
//             ))}
//             <p className="sm:hidden">
//               <Link
//                 to="/events"
//                 className="text-[14px] leading-[150%] font-inter flex items-center gap-2 underline"
//               >
//                 View All Events <BsArrowRight size={24} />
//               </Link>
//             </p>
//           </div>
//         )}
//       </section>

//       <div className="hidden absolute bottom-[-50px] right-[50px] -z-50 md:block lg:bottom-[-100px] lg:right-[75px]">
//         <img src={EventLine} alt="" className="w-full" />
//       </div>
//       <div className="hidden absolute right-0 bottom-[-120px] -z-50 md:block lg:hidden lg:bottom-[-160px] ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="53"
//           height="164"
//           viewBox="0 0 53 164"
//           fill="none"
//         >
//           <circle
//             cx="82.0842"
//             cy="82.2404"
//             r="79.9431"
//             stroke="#FD9F2B"
//             strokeWidth="3.63378"
//             strokeDasharray="7.27 7.27"
//           />
//         </svg>
//       </div>
//       <div className="hidden absolute bottom-[-185px] right-0 -z-50 lg:block  ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="71"
//           height="225"
//           viewBox="0 0 71 225"
//           fill="none"
//         >
//           <circle
//             cx="112.5"
//             cy="112.5"
//             r="110"
//             stroke="#FD9F2B"
//             strokeWidth="5"
//             strokeDasharray="10 10"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;




import { BiCalendar } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import eventScene from "../../assets/images/event-scene.png";
import EventLine from "../../assets/images/EventLine.png";
import { useGetEventQuery } from "../../redux/apiSlice";
import "./Hero.css";
import { useEffect, useState } from "react";

const UpcomingEvents = () => {
  const { data, isLoading } = useGetEventQuery();
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const now = new Date();
      
      // Filter for upcoming OR ongoing events (events that haven't ended yet)
      const upcomingEvents = data.filter((event) => {
        if (!event.end_date) return false; // Skip events without end date
        
        const endDate = new Date(event.end_date);
        // Include events that end today or in the future
        return endDate >= now;
      });
      
      // Sort by start date (soonest first)
      const sortedEvents = [...upcomingEvents].sort((a, b) => {
        const dateA = new Date(a.start_date);
        const dateB = new Date(b.start_date);
        return dateA - dateB;
      });

      console.log("Total events:", data.length);
      console.log("Upcoming/Ongoing events:", sortedEvents.length);
      
      // Get the first 2 events
      setCurrentEvents(sortedEvents.slice(0, 2));
    } else {
      setCurrentEvents([]);
    }
  }, [data]);

  // Simple date formatting function
  const formatDateRange = (startDate, endDate) => {
    if (!startDate || !endDate) return "";

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const start = new Date(startDate);
    const end = new Date(endDate);

    const startDay = start.getDate();
    const endDay = end.getDate();
    const startMonth = months[start.getMonth()];
    const endMonth = months[end.getMonth()];

    // Ordinal suffix function
    const getSuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    // Check if same month
    if (startMonth === endMonth) {
      return `${startDay}${getSuffix(startDay)} - ${endDay}${getSuffix(endDay)} ${endMonth}`;
    } else {
      return `${startDay}${getSuffix(startDay)} ${startMonth} - ${endDay}${getSuffix(endDay)} ${endMonth}`;
    }
  };

  const EventCard = ({
    cover_image,
    title,
    start_date,
    end_date,
    time,
    description,
  }) => (
    <div className="bg-[#E5E5E5] p-[11.82px] space-y-[15.76px] rounded-[3.94px] sm:min-w-[540px] lg:min-w-[1105px] sm:rounded-[8px] md:p-[24px] md:mr-[16px] lg:items-center lg:grid gap-5 lg:grid-cols-2 xl:min-w-[1227px]">
      <img
        src={cover_image || eventScene}
        alt={title}
        className="object-cover rounded-[7.39px] w-full lg:h-[270px]"
        onError={(e) => {
          e.target.src = eventScene;
        }}
      />

      <div className="space-y-2 md:w-[503px] ">
        <h4 className="border-b-[0.49px] border-b-[#565656] pb-[3.94px] text-base leading-[100%] font-satoshi capitalize sm:text-[32px] md:pt-2 lg:text-[26px] lg:pb-[10px] xl:text-[32px] ">
          {title}
        </h4>
        <div className="space-y-[7.88px] italic text-[#777777] md:pt-2 lg:pb-[5px]">
          <p className="flex items-center italic text-xs leading-[100%] capitalize gap-2 md:pt-2 md:text-base xl:text-base">
            <BiCalendar /> {formatDateRange(start_date, end_date)}
          </p>
          <p className="flex items-center italic text-xs leading-[100%] capitalize gap-2 border-b-[0.49px] border-b-[#565656] pb-[3.94px] md:pt-2 md:text-base lg:text-sm lg:pb-[8px] xl:text-base">
            <BsClock /> {time}
          </p>
        </div>
        <p className="text-sm leading-[100%] text-[#000000] font-normal font-inter md:text-base md:pt-2 lg:text-sm lg:leading-[110%] xl:text-base">
          {description}
        </p>
      </div>
    </div>
  );

  // Show loading state
  if (isLoading) {
    return (
      <section className="relative lg:pt-20">
        <section className="container mx-auto p-6 space-y-4 sm:mt-8 md:p-0 md:mb-[60px] md:py-6 ">
          <div className="flex justify-between lg:py-5">
            <h2 className="event-heading font-satoshi leading-[1] text-[clamp(24px,2.4vw,40px)]">
              UPCOMING EVENTS
            </h2>
          </div>
          <div className="text-center py-8">
            <p>Loading events...</p>
          </div>
        </section>
      </section>
    );
  }

  return (
    <section className="relative lg:pt-20">
      <section className="container mx-auto p-6 space-y-4 sm:mt-8 md:p-0 md:mb-[60px] md:py-6 ">
        <div className="flex justify-between lg:py-5">
          <h2 className="event-heading font-satoshi leading-[1] text-[clamp(24px,2.4vw,40px)]">
            UPCOMING EVENTS
          </h2>

          <p className="max-sm:hidden">
            <Link
              to="/events"
              className="event-heading font-inter leading-[1.5] flex items-center gap-2 underline text-[clamp(14px,2vw,40px)]"
            >
              View All Events
              <BsArrowRight className="text-[clamp(20px,2.5vw,30px)]" />
            </Link>
          </p>
        </div>

        {currentEvents.length === 0 ? (
          <div className="text-center py-8">
            <p>No upcoming events at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="hide-scrollbar space-y-4 sm:flex sm:flex-nowrap sm:overflow-auto sm:max-w-full sm:gap-2">
            {currentEvents.map((ev, i) => (
              <EventCard key={i} {...ev} />
            ))}
            <p className="sm:hidden">
              <Link
                to="/events"
                className="text-[14px] leading-[150%] font-inter flex items-center gap-2 underline"
              >
                View All Events <BsArrowRight size={24} />
              </Link>
            </p>
          </div>
        )}
      </section>

      <div className="hidden absolute bottom-[-50px] right-[50px] -z-50 md:block lg:bottom-[-100px] lg:right-[75px]">
        <img src={EventLine} alt="" className="w-full" />
      </div>
      <div className="hidden absolute right-0 bottom-[-120px] -z-50 md:block lg:hidden lg:bottom-[-160px] ">
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
            strokeWidth="3.63378"
            strokeDasharray="7.27 7.27"
          />
        </svg>
      </div>
      <div className="hidden absolute bottom-[-185px] right-0 -z-50 lg:block  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="71"
          height="225"
          viewBox="0 0 71 225"
          fill="none"
        >
          <circle
            cx="112.5"
            cy="112.5"
            r="110"
            stroke="#FD9F2B"
            strokeWidth="5"
            strokeDasharray="10 10"
          />
        </svg>
      </div>
    </section>
  );
};

export default UpcomingEvents;
