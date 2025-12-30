import firstTimer from "../../assets/videos/First-timer-smaller.mp4";
import logo from "../../assets/images/cbc-logo.webp";
import greyBg from "../../assets/images/Rectangle-grey.png";
import OverViewContinuation from "./OverViewContinuation";

const OverView = () => {
  return (
    <>
      <section className="relative mt-[50px] lg:mt-[200px]">
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
        <div className="absolute left-0 right-0 top-[-70px] md:top-[-120px] container mx-auto  lg:top-[-20vw] 2xl:top-[-15vw]">
          <video
            src={firstTimer}
            controls
            className="px-6 rounded-[5.2px] md:rounded-[14.34px] md:w-full md:px-0 lg:rounded-[20px]"
          ></video>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[16vw] min-[500px]:bottom-[12vw] sm:bottom-[8vw] md:bottom-[5vw] lg:bottom-[15vw] 2xl:bottom-[12vw]">
          <p className="text-[13.73px] text-center w-[266px] font-satoshi md:text-[40px] md:w-[661px] leading-[100%] lg:text-[45px] xl:text-[52px] lg:w-[923px]">
            Be Part of A People Walking Boldly In Power, Purpose, And Dominion.
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[4px] lg:bottom-[8px] 2xl:bottom-[20px]">
          <img
            src={logo}
            alt=""
            className="w-[45px] h-auto object-cover md:w-[125px] lg:w-[125px] "
          />
        </div>
      </section>
      <OverViewContinuation />
    </>
  );
};

export default OverView;
