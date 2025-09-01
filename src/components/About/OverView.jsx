import Image30 from "../../assets/images/image-30.png";
import logo from "../../assets/images/cbc-logo.webp";
import greyBg from "../../assets/images/Rectangle-grey.png";
import OverViewContinuation from "./OverViewContinuation";
const OverView = () => {
  return (
    <>
      <section className="relative mt-[200px]">
        <div className="w-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="393"
            // height="228"
            viewBox="0 0 393 228"
            fill="none"
            className="w-full"
          >
            <path
              d="M-30.4828 0.798828H425.281L502.25 183.049L-41 227.673L-30.4828 0.798828Z"
              fill="#E8E8E8"
            />
          </svg>
          {/* <img src={greyBg} alt=""  className=""/> */}
        </div>
        <div className="absolute left-0 right-0 top-[-70px] md:top-[-120px] container mx-auto  lg:top-[-220px]">
          <img src={Image30} alt="" className="px-6 rounded-[5.2px] md:rounded-[14.34px]  md:w-full md:px-0 lg:rounded-[20px]" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[55px] md:bottom-[140px] lg:bottom-[250px]">
          <p className="text-center w-[266px] text-[15.732px] font-satoshi md:text-[40px] md:w-[661px] md:leading-[100%] lg:text-[52px] lg:w-[923px]">
            Be Part of A People Walking Boldly In Power, Purpose, And Dominion.
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[4px] lg:bottom-[20px]">
          <img
            src={logo}
            alt=""
            className="w-[45px] h-auto object-cover md:w-[125px] lg:w-[125px]"
          />
        </div>
      </section>
      <OverViewContinuation />
    </>
  );
};

export default OverView;
