// import fellowships from "../../data/fellowshipData";
// import { FiPhone } from "react-icons/fi";
// import { CiLocationOn } from "react-icons/ci";

// const FellowshipLocation = () => {
//   return (
//     <section className="px-6 container mx-auto md:px-0 lg:w-[50vw]">
//       {fellowships.map((fellowship) => (
//         <section key={fellowship.id}>
//           <div>
//             <h3 className="text-[32px] font-satoshi leading-[120%] border-b-[0.5px] border-[#565656] mt-10 py-10 md:text-[40px]">
//               {fellowship.district}
//             </h3>
//             <div className="pt-4 pb-1">
//               <span className="text-base text-[#777777] font-inter">
//                 Coordinator
//               </span>
//               <div className="md:flex md:gap-10 md:border-b-[0.5px] md:border-[#565656]">
//                 <div className="flex gap-2 items-center py-2">
//                   <div className="rounded-full border-[2px] border-[#9E9E9E]">
//                     <img
//                       src={fellowship.cordinatorImg}
//                       className="w-[45px] h-[45px] rounded-full"
//                     />
//                   </div>
//                   <p className="text-base leading-[100%] italic text-[#777777] font-inter">
//                     {fellowship.cordinatorName}
//                   </p>
//                 </div>
//                 <div className="flex gap-4 items-center border-b-[0.5px] border-[#565656] pt-2 pb-5 md:border-none md:pt-0 md:pb-0">
//                   <FiPhone  className="text-[#777777] md:text-[22px]"/>
//                   <p className="text-base leading-[100%] italic text-[#777777] font-inter">
//                     {fellowship.cordinatorPhone}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <section>
//             <div className="flex items-center gap-4 py-4">
//               <CiLocationOn className="text-[#000000]  md:text-[25px]" />
//               <p className="text-base leading-[100%] text-[#000000] font-inter">
//                 Locations
//               </p>
//             </div>
//               <p className="text-base py-2 text-[#000000] leading-[140%] font-inter md:text-[20px] md:leading-[100%] md:py-3">

//               </p>
//           </section>
//         </section>
//       ))}
//     </section>
//   );
// };

// export default FellowshipLocation;

import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { useGetFellowshipQuery } from "../../redux/apiSlice";
import Spinner from "../Loader/Spinner";
import { FaUserCircle } from "react-icons/fa"; // For avatar fallback

const FellowshipLocation = () => {
  const { data, isLoading, isError, error } = useGetFellowshipQuery();

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="px-6 container mx-auto md:px-0 lg:w-[50vw] min-h-[300px] flex flex-col items-center justify-center">
        <p className="text-red-500 text-center text-lg mb-4">
          Failed to load fellowship data
        </p>
        <p className="text-gray-600 text-center">
          {error?.data?.message || "Please try again later"}
        </p>
      </div>
    );
  }

  // No data state
  if (!data || data.length === 0) {
    return (
      <div className="px-6 container mx-auto md:px-0 lg:w-[50vw] min-h-[300px] flex items-center justify-center">
        <p className="text-gray-500 text-center text-lg">
          No fellowship data available
        </p>
      </div>
    );
  }

  return (
    <section className="px-6 container mx-auto md:px-0 lg:w-[50vw]">
      {data.map((fellowship) => (
        <section key={fellowship.id}>
          <div>
            <h3 className="text-[32px] font-satoshi leading-[120%] border-b-[0.5px] border-[#565656] mt-10 py-10 md:text-[40px]">
              {fellowship.name}
            </h3>
            <div className="pt-4 pb-1">
              <span className="text-base text-[#777777] font-inter">
                Coordinator
              </span>
              <div className="md:flex md:gap-10 md:border-b-[0.5px] md:border-[#565656]">
                <div className="flex gap-2 items-center py-2">
                  <div className="rounded-full border-[2px] border-[#9E9E9E] w-[45px] h-[45px] flex items-center justify-center overflow-hidden bg-gray-100">
                    {fellowship.cordinatorImg ? (
                      <img
                        src={fellowship.cordinatorImg}
                        alt={fellowship.coordinator_name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // If image fails to load, show fallback
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML =
                            '<FaUserCircle className="w-full h-full text-gray-400" />';
                        }}
                      />
                    ) : (
                      // Fallback avatar if no image URL
                      <FaUserCircle className="w-full h-full text-gray-400" />
                    )}
                  </div>
                  <p className="text-base leading-[100%] italic text-[#777777] font-inter">
                    {fellowship.coordinator_name}
                  </p>
                </div>
                <div className="flex gap-4 items-center border-b-[0.5px] border-[#565656] pt-2 pb-5 md:border-none md:pt-0 md:pb-0">
                  <FiPhone className="text-[#777777] md:text-[22px]" />
                  <p className="text-base leading-[100%] italic text-[#777777] font-inter">
                    {fellowship.coordinator_phone ||
                      "Phone number not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="flex items-center gap-4 py-4">
              <CiLocationOn className="text-[#000000] md:text-[25px]" />
              <p className="text-base leading-[100%] text-[#000000] font-inter">
                Locations
              </p>
            </div>
            <p className="text-base py-2 text-[#000000] leading-[140%] font-inter md:text-[20px] md:leading-[100%] md:py-3">
              12-14, Akwu-lwu Street, Nepa Bus Stop ijegun
            </p>
          </section>
        </section>
      ))}
    </section>
  );
};

export default FellowshipLocation;
