// import { useGetEventQuery } from "../../redux/apiSlice";
// import Spinner from "../Loader/Spinner";
// import ChurchLoadingAnimation from "../Loader/ChurchLoadingAnimation";
// import aboutImg from "../../assets/images/about.webp";
// import calender from "../../assets/images/calender.png";
// import time from "../../assets/images/time.png";
// import Pagination from "../shared/Pagination";

// const AllEvents = () => {
//   const { isLoading, data } = useGetEventQuery();
//   console.log(data);

//   return (
//     <section>
//       {isLoading ? (
//         <div>
//           <Spinner loading={isLoading} size={30} />
//           {/* <ChurchLoadingAnimation/> */}
//         </div>
//       ) : (
//         <section className="px-6 pt-5  container mx-auto md:px-0 lg:pt-[150px] ">
//           <div className="">
//             {data?.map((events, index) => {
//               const isEven = index % 2 === 0;

//               return (
//                 <div
//                   key={events.id}
//                   className="rounded-[14.154px] overflow-hidden py-10 md:flex md:gap-6"
//                 >
//                   {/* Image Section - Conditionally rendered based on index */}
//                   <div className={`md:w-1/2 ${!isEven ? "md:order-2" : ""}`}>
//                     <img
//                       src={aboutImg}
//                       alt=""
//                       className="rounded-[15px] w-full object-cover md:h-full"
//                     />
//                   </div>

//                   {/* Content Section - Conditionally rendered based on index */}
//                   <div className={`md:w-4/6 ${!isEven ? "md:order-1" : ""}`}>
//                     <h3 className="pt-2 text-[38px] border-b border-[#7D7D7D] pb-4 font-satoshi capitalize mt-4 md:mt-0 md:pt-0 leading-[100%]">
//                       {events.title}
//                     </h3>

//                     <div>
//                       <div className="flex gap-3 items-center pt-10">
//                         <img
//                           src={calender}
//                           alt=""
//                           className="w-[24px] h-[24px]"
//                         />
//                         <span className="text-base text-[#777777] font-inter">
//                           {new Date(events.start_time).toLocaleDateString(
//                             "en-US",
//                             {
//                               month: "long",
//                               day: "numeric",
//                             }
//                           )}
//                           {"  "}-{"  "}
//                           {new Date(events.end_time).toLocaleDateString(
//                             "en-US",
//                             {
//                               month: "long",
//                               day: "numeric",
//                             }
//                           )}
//                         </span>
//                       </div>
//                       <div className="flex gap-3 items-center border-b pb-4 border-[#7D7D7D] pt-2">
//                         <img src={time} alt="" className="w-[24px] h-[24px]" />
//                         <span className="text-base text-[#777777] italic font-inter">
//                           {new Date(events.end_time).toLocaleDateString(
//                             "en-US",
//                             {
//                               month: "long",
//                               day: "numeric",
//                             }
//                           )}{" "}
//                         </span>
//                       </div>
//                     </div>

//                     <p className="py-4 text-base font-inter leading-normal text-[#000] lg:pt-[40px]">
//                       {events.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       )}
//     </section>
//   );
// };

// export default AllEvents;

// AllEvents.jsx
import { useState, useEffect } from "react";
import { useGetEventQuery } from "../../redux/apiSlice";
import Spinner from "../Loader/Spinner";
import aboutImg from "../../assets/images/about.webp";
import calender from "../../assets/images/calender.png";
import time from "../../assets/images/time.png";
import Pagination from "../shared/Pagination";

const AllEvents = ({ searchQuery = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Use the API query with pagination and search
  const {
    data: eventsResponse,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetEventQuery({
    page: currentPage,
    per_page: itemsPerPage,
    q: searchQuery,
  });

  console.log(eventsResponse,"event reponse")

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Handle pagination change
  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Extract data from response
  const events = eventsResponse?.data || [];
  const totalPages = eventsResponse?.total_pages || 1;
  const totalEvents = eventsResponse?.total || 0;
  const isSearchResult = eventsResponse?.isSearchResult || false;

  // Loading state
  if (isLoading) {
    return (
      <section className="min-h-[400px] flex items-center justify-center">
        <Spinner loading={true} size={30} />
        {searchQuery && (
          <p className="ml-4 text-gray-600">Searching for "{searchQuery}"...</p>
        )}
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-2">Error loading events</p>
          <button
            onClick={refetch}
            className="px-6 py-2 bg-[#F3A900] text-white rounded-lg hover:bg-[#e09900]"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  // Empty state
  if (events.length === 0) {
    return (
      <section className="py-12 text-center">
        {searchQuery ? (
          <>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No events found for "{searchQuery}"
            </h3>
            <p className="text-gray-600">Try different search terms</p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No events available
            </h3>
            <p className="text-gray-600">Check back later for new events</p>
          </>
        )}
      </section>
    );
  }

  // Show search info if applicable
  const showSearchInfo = searchQuery && events.length > 0;

  return (
    <section>
      {/* Search results header */}
      {showSearchInfo && (
        <div className="container mx-auto px-6 md:px-0 mb-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-gray-600 text-center">
            Found {totalEvents} event{totalEvents !== 1 ? "s" : ""}
            {isSearchResult && " (showing titles only)"}
          </p>
        </div>
      )}

      {/* Warning for search results with limited data */}
      {isSearchResult && events.length > 0 && (
        <div className="container mx-auto px-6 md:px-0 mb-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              Note: Search results only show event titles. Full event details
              may not be available.
            </p>
          </div>
        </div>
      )}

      {/* Events list */}
      <section className="px-6 pt-5 container mx-auto md:px-0 lg:pt-[150px]">
        <div className="">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="rounded-[14.154px] overflow-hidden py-10 md:flex md:gap-6 mb-8"
              >
                {/* Image Section */}
                <div className={`md:w-1/2 ${!isEven ? "md:order-2" : ""}`}>
                  <img
                    src={aboutImg}
                    alt={event.title || "Event"}
                    className="rounded-[15px] w-full object-cover md:h-full"
                  />
                </div>

                {/* Content Section */}
                <div className={`md:w-4/6 ${!isEven ? "md:order-1" : ""}`}>
                  <h3 className="pt-2 text-[38px] border-b border-[#7D7D7D] pb-4 font-satoshi capitalize mt-4 md:mt-0 md:pt-0 leading-[100%]">
                    {event.title || "Event Title"}
                  </h3>

                  {/* Only show date/time if available (not search results) */}
                  {!isSearchResult && (
                    <div>
                      <div className="flex gap-3 items-center pt-10">
                        <img
                          src={calender}
                          alt="Calendar"
                          className="w-[24px] h-[24px]"
                        />
                        <span className="text-base text-[#777777] font-inter">
                          {event.start_date
                            ? new Date(event.start_date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  day: "numeric",
                                },
                              )
                            : "Date TBD"}{" "}
                          {event.end_date &&
                            `- ${new Date(event.end_date).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                day: "numeric",
                              },
                            )}`}
                        </span>
                      </div>
                      <div className="flex gap-3 items-center border-b pb-4 border-[#7D7D7D] pt-2">
                        <img
                          src={time}
                          alt="Time"
                          className="w-[24px] h-[24px]"
                        />
                        <span className="text-base text-[#777777] italic font-inter">
                          {event.time || "Time TBD"}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Description - only if available */}
                  {event.description && (
                    <p className="py-4 text-base font-inter leading-normal text-[#000] lg:pt-[40px]">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default AllEvents;
