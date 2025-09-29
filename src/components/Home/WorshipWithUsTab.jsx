import { BsClock } from "react-icons/bs";
import worshipLine from "../../assets/images/worshipLine.png";
import worshipLineDesktop from "../../assets/images/worshipLineDesktop.png";

const WorshipWithUsTab = () => {
  return (
    <section className="relative  pt-[100px] mt-[70px] mb-[700px] space-y-8 hidden md:block lg:mt-[230px] 2xl:mt-[350px] 2xl:mb-[1100px]">
      <div className="container mx-auto">
        <h3 className="font-satoshi text-[28.36px] leading-[100%] relative before:absolute before:w-[174.4px] before:h-[77.27px] before:rounded-[283.57px] before:bg-[#FFB91E47] before:top-1/2 before:-translate-y-1/2 before:-right-3 w-fit before:z-0 lg:text-[40px] lg:before:w-[146px] lg:before:h-[109px] lg:rounded-[400px]">
          WORSHIP WITH US
        </h3>
      </div>

      <section className="container mx-auto grid grid-cols-3 gap-[40px] relative">
        {/* One card */}
        <div className="bg-white  absolute top-[130px] lg:top-[4vw] xl:top-[12vw]">
          <div className="relative py-[5.56px] px-[14.18px] border rounded-[10.63px] space-y-4 w-[215.54px] h-[292.79px] before:absolute before:w-[244.99px] before:h-[138.95px] before:bg-[#FFB91E47] before:bottom-[20px] before:left-1/2 before:-translate-x-1/2 before:rounded-[10.63px]  xl:before:w-[324.99px] xl:w-[290px] xl:h-[330px] 2xl:w-[368px] 2xl:h-[429px] 2xl:p-[8px] before:2xl:w-[402px] before:2xl:h-[196px]">
            <h4 className="text-[21px] font-satoshi leading-[120%] capitalize text-center pt-6 xl:text-[28px] 2xl:text-[36px] py-[10px]">
              Success, Business & Leadership Service
            </h4>
            <div className="py-[8px] space-y-1 absolute inset-0 bottom-[-60px] flex justify-center flex-col">
              <p className="flex items-center text-[22.69px] leading-[12.82px] font-inter gap-2 italic justify-center mt-4 mb-5 lg:text-[32px] lg:mt-8 xl:mt-16">
                <BsClock className="text-base xl:text-[30px]" /> 8AM
              </p>
              <p className="text-[22.69px] leading-[120%] font-inter italic text-center  lg:text-[32px]">
                Sundays
              </p>
            </div>
          </div>
        </div>
        {/* Card two */}
        <div className="absolute bottom-[-620px] right-[250px] min-[1056px]:top-[20vw]  min-[1216px]:top-[25vw] lg:right-[28vw] xl:top-[30vw] xl:right-[32vw] 2xl:top-[30vw]  2xl:right-[28vw] ">
          <div className="bg-white">
            <div className="border w-[238.54px] h-[148.88px] rounded-[10.63px] p-[5.67px] lg:p-[8px]  xl:w-[290px] xl:h-[208.88px]  2xl:w-[368px] 2xl:h-[250px] 2xl:rounded-[15px] ">
              <h4 className="text-[22px] font-satoshi leading-[120%] capitalize text-center pt-6 xl:text-[28px] 2xl:text-[36px] ">
                Celebration & Prophetic Service
              </h4>
            </div>
            <div className="py-[8px] space-y-1 bg-[#FFB91E47] mt-3 w-[238.54px] h-[150px] xl:w-[290px] xl:h-[165px]  2xl:w-[368px] 2xl:h-[190px] 2xl:py-[12px] 2xl:px-[94px]">
              <p className="flex items-center text-[22.69px] leading-[12.82px] font-inter gap-2 italic justify-center mt-4 mb-5 lg:text-[32px] lg:mt-8">
                <BsClock className="text-base xl:text-[30px]" /> 10AM
              </p>
              <p className="text-[22.69px] leading-[120%] font-inter italic text-center  lg:text-[32px]">
                Sundays
              </p>
            </div>
          </div>
        </div>
        {/* Card three */}
        <div className="absolute top-0 right-0 pb-10 lg:top-[-100px] xl:top-[-4vw]">
          <div className=" bg-white relative py-[5.56px] px-[14.18px] border rounded-[10.63px] space-y-4 w-[215.54px] h-[292.79px]  before:absolute before:w-[244.99px] before:h-[138.95px] before:bg-[#FFB91E47] before:bottom-[20px] before:left-1/2 before:-translate-x-1/2 before:rounded-[10.63px]  xl:before:w-[324.99px] xl:w-[290px] xl:h-[330px] 2xl:w-[368px] 2xl:h-[429px] 2xl:p-[8px] before:2xl:w-[402px] before:2xl:h-[196px] ">
            <h4 className="text-[22px] font-satoshi leading-[120%] capitalize text-center pt-6 xl:text-[28px] 2xl:text-[36px] py-[10px]">
              School of the spirit
            </h4>
            <div className="py-[8px] space-y-1 absolute inset-0 bottom-[-60px] flex justify-center flex-col">
              <p className="flex items-center text-[22.69px] leading-[12.82px] font-inter gap-2 italic justify-center mt-4 mb-5 lg:text-[32px] lg:mt-8 xl:mt-16">
                <BsClock className="text-base xl:text-[30px]" /> 6PM
              </p>
              <p className="text-[22.69px] leading-[120%] font-inter italic text-center  lg:text-[32px]">
                Wednesdays
              </p>
            </div>
          </div>

        </div>
      </section>
      <div className="absolute top-[80px] left-0 right-[160px] -z-50 lg:top-[-20vw] xl:right-[16vw] xl:top-[-10vw]  2xl:top-[-15vw] 2xl:right-[15vw] lg:-z-[500]">
        <img src={worshipLine} alt="" className="hidden md:block lg:hidden" />
        <img src={worshipLineDesktop} alt="" className="hidden lg:block" />
      </div>

      {/* <div className="div lg:bg-black xl:bg-green-500 2xl:bg-yellow-500 ">
        HELLLO
      </div> */}
    </section>
  );
};
export default WorshipWithUsTab;
