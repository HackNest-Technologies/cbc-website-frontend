import newMemberVideo from "../../assets/videos/First-timer-smaller.mp4"
import logo from "../../assets/images/cbc-logo.webp";
import greyBg from "../../assets/images/Rectangle-grey.png";
const WelcomeVideo = () => {
  return (
    <section className="relative  mt-[120px] md:mt-[200px] lg:mt-[300px]">
      <div className="w-full">
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
        <video
          src={newMemberVideo}
          controls
          className="px-6 rounded-[5.2px] md:rounded-[14.34px] md:w-full md:px-0 lg:rounded-[20px]"
        >
        </video>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[4px] lg:bottom-[20px]">
        <img
          src={logo}
          alt=""
          className="w-[45px] h-auto object-cover md:w-[125px] lg:w-[125px]"
        />
      </div>
    </section>
  );
};

export default WelcomeVideo;
