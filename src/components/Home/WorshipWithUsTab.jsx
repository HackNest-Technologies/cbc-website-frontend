import { BsClock } from "react-icons/bs";
import worshipLine from "../../assets/images/worshipLine.png";
const WorshipWithUsTab = () => {
  return (
    <section className="relative  pt-[100px] mt-[70px] mb-[700px] space-y-8 hidden md:block">
      <div className="container mx-auto">
        <h3 className="font-satoshi text-[28.36px] leading-[100%] relative before:absolute before:w-[174.4px] before:h-[77.27px] before:rounded-[283.57px] before:bg-[#FFB91E47] before:top-1/2 before:-translate-y-1/2 before:-right-3 w-fit before:z-0">
          WORSHIP WITH US
        </h3>
      </div>

      <section className="borde border-red-500 container mx-auto grid grid-cols-3 gap-[40px] relative">
        {/* One card */}
        <div className="bg-white  absolute top-[130px]">
          <div
            className="relative py-[5.56px] px-[14.18px] border rounded-[10.63px] space-y-4 w-[215.54px] h-[292.79px] 
           before:absolute before:w-[244.99px] before:h-[138.95px] before:bg-[#FFB91E47] before:bottom-[20px] before:left-1/2 before:-translate-x-1/2 before:rounded-[10.63px] "
          >
            <h4 className="text-[21px] font-satoshi leading-[120%] capitalize text-center pt-6">
              Success, Business & Leadership Service
            </h4>
            <div className="py-[8px] space-y-1 absolute inset-0 bottom-[-60px] flex justify-center flex-col">
              <p className="flex items-center text-[22.69px] leading-[12.82px] font-inter gap-2 italic justify-center mt-4 mb-5">
                <BsClock className="text-base" /> 8AM
              </p>
              <p className="text-[22.69px] leading-[120%] font-inter italic text-center">
                Sundays
              </p>
            </div>
          </div>
        </div>
        {/* Card two */}
        <div className="absolute bottom-[-620px] right-[250px] ">
          <div className="bg-white">
            <div className="border w-[238.54px] h-[148.88px] rounded-[10.63px] p-[5.67px]">
              <h4 className="text-[22px] font-satoshi leading-[120%] capitalize text-center pt-6">
                Celebration & Prophetic Service
              </h4>
            </div>
            <div className="py-[8px] space-y-1 bg-[#FFB91E47] mt-3 w-[238.54px] h-[150px] ">
              <p className="flex items-center text-[22.69px] leading-[12.82px] font-inter gap-2 italic justify-center mt-4 mb-5">
                <BsClock className="text-base" /> 10AM
              </p>
              <p className="text-[22.69px] leading-[120%] font-inter italic text-center">
                Sundays
              </p>
            </div>
          </div>
        </div>
        {/* Card three */}
        <div className="absolute top-0 right-0 pb-10">
          <div className=" bg-white relative py-[5.56px] px-[14.18px] border rounded-[10.63px] space-y-4 w-[215.54px] h-[292.79px]  before:absolute before:w-[244.99px] before:h-[138.95px] before:bg-[#FFB91E47] before:bottom-[20px] before:left-1/2 before:-translate-x-1/2 before:rounded-[10.63px] ">
            <h4 className="text-[22px] font-satoshi leading-[120%] capitalize text-center pt-6">
              School of the spirit
            </h4>
            <div className="py-[8px] space-y-1 absolute inset-0 bottom-[-60px] flex justify-center flex-col">
              <p className="flex items-center text-[22.69px] leading-[12.82px] font-inter gap-2 italic justify-center mt-4 mb-5">
                <BsClock className="text-base" /> 6PM
              </p>
              <p className="text-[22.69px] leading-[120%] font-inter italic text-center">
                Wednesdays
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-[80px] right-[160px] -z-50">
        <img src={worshipLine} alt="" className="w-[100vw]" />
      </div>
    </section>
  );
};
export default WorshipWithUsTab;
