import { useGetEventQuery } from "../../redux/apiSlice";
import Spinner from "../Loader/Spinner";
import aboutImg from "../../assets/images/about.webp";
import calender from "../../assets/images/calender.png";
import time from "../../assets/images/time.png";

const AllEvents = () => {
  const { isLoading, data } = useGetEventQuery();
  // image.
  // Event date
  // Start date
  // Start time
  // description

  console.log(data);
  return (
    <section>
      {isLoading ? (
        <div>
          <Spinner loading={isLoading} size={30} />
        </div>
      ) : (
        <section className="px-6 pt-5  container mx-auto md:px-0 lg:pt-[150px] ">
          <div className="">
            {data.map((events) => (
              <div
                key={events.id}
                className="rela rounded-[14.154px] overflow-hidden py-10 md:flex md:gap-6  "
              >
                <div className="md:w-1/2">
                  <img
                    src={aboutImg}
                    alt=""
                    className="rounded-[15px] w-full object-cover md:h-full"
                  />
                </div>

                <div className="md:w-4/6">
                  <h3 className="pt-2 text-[38px] border-b border-[#7D7D7D] pb-4  font-satoshi capitalize mt-4 md:mt-0  md:pt-0 leading-[100%] ">
                    {events.title}
                  </h3>

                  <div>
                    <div className="flex gap-3 items-center pt-10">
                      <img
                        src={calender}
                        alt=""
                        className="w-[24px] h-[24px] "
                      />
                      {/* <span>
                        {events.start_time} - {events.end_time}{" "}
                      </span> */}

                      <span className="text-base text-[#777777] font-inter">
                        {new Date(events.start_time).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                          }
                        )}
                        {"  "}-{"  "}
                        {new Date(events.end_time).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex  gap-3 items-center border-b  pb-4 border-[#7D7D7D] pt-2">
                      <img src={time} alt="" className="w-[24px] h-[24px] " />
                      <span className="text-base text-[#777777]  italic font-inter">
                        {" "}
                        {new Date(events.end_time).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                        })}{" "}
                      </span>
                    </div>
                  </div>

                  <p className="py-4 text-base font-inter leading-normal text-[#000]  lg:pt-[40px] ">
                    {events.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default AllEvents;
