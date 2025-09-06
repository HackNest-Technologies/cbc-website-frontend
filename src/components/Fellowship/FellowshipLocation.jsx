import fellowships from "../../data/fellowshipData";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const FellowshipLocation = () => {
  return (
    <section className="px-6 container mx-auto md:px-0 lg:w-[50vw]">
      {fellowships.map((fellowship) => (
        <section key={fellowship.id}>
          <div>
            <h3 className="text-[32px] font-satoshi leading-[120%] border-b-[0.5px] border-[#565656] mt-10 py-10 md:text-[40px]">
              {fellowship.district}
            </h3>
            <div className="pt-4 pb-1">
              <span className="text-base text-[#777777] font-inter">
                Coordinator
              </span>
              <div className="md:flex md:gap-10 md:border-b-[0.5px] md:border-[#565656]">
                <div className="flex gap-2 items-center py-2">
                  <div className="rounded-full border-[2px] border-[#9E9E9E]">
                    <img
                      src={fellowship.cordinatorImg}
                      className="w-[45px] h-[45px] rounded-full"
                    />
                  </div>
                  <p className="text-base leading-[100%] italic text-[#777777] font-inter">
                    {fellowship.cordinatorName}
                  </p>
                </div>
                <div className="flex gap-4 items-center border-b-[0.5px] border-[#565656] pt-2 pb-5 md:border-none md:pt-0 md:pb-0">
                  <FiPhone  className="text-[#777777] md:text-[22px]"/>
                  <p className="text-base leading-[100%] italic text-[#777777] font-inter">
                    {fellowship.cordinatorPhone}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="flex items-center gap-4 py-4">
              <CiLocationOn className="text-[#000000]  md:text-[25px]" />
              <p className="text-base leading-[100%] text-[#000000] font-inter">
                Locations
              </p>
            </div>
            {fellowship.locations.map((location,index) => (
              <p key={index} className="text-base py-2 text-[#000000] leading-[140%] font-inter md:text-[20px] md:leading-[100%] md:py-3">
                {location}
              </p>
            ))}
            {/* <p className="text-base leading-[140%] font-inter">address two</p> */}
          </section>
        </section>
      ))}
    </section>
  );
};

export default FellowshipLocation;
