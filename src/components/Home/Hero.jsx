import { Link } from "react-router-dom";
import streamIcon from "../../assets/images/stream-icon.svg";
import video from "../../assets/videos/video.mp4";
import Button from "../shared/Button.jsx";
import CircularText from "../../utils/CircularText.jsx";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-end pb-[60px] md:pb-[100px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white space-y-8 md:px-0">
        <div className="space-y-2 md:space-y-4 w-[300px] md:w-[673px] lg:w-[812px]">
          <h1 className="font-semibold text-[32px] font-satoshi leading-[100%] sm:text-[64px] md:text-[75px]">
            Raising a People of Power, Purpose & Dominion
          </h1>
          <p className="text-base font-inter leading-[100%] pt-[5px] md:w-[578px] sm:text-2xl">
            Worship and serve God with us for six months, and experience a major
            testimony in your life!
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            text="Watch Live"
            spanclass="sm:text-base md:text-lg"
            icon={<img src={streamIcon} alt="Stream live"  className="sm:w-[30px] sm:h-[30px] object-cover"/>}
            className="sm:text-lg sm:w-[220px] sm:justify-center sm:h-[58px] md:text-[18px]"
          />
          <Link to="welcome" className="w-[105px] h-[35px] text-center text-sm font-inter font-medium leading-[150%] rounded-[19.15px]  py-[4px] text-[#000] bg-gradient-to-b from-white to-[#EEF4FF] border flex items-center justify-center border-b-white  sm:text-lg sm:w-[220px]  sm:text-center sm:h-[58px] sm:rounded-[50px] sm:py-[3px] ">
            I'm New
          </Link>
        </div>
      </div>

       <div
        className="absolute bottom-[-30px] right-[40px]  
          md:bottom-[-60px] md:right-[30px] 
          lg:bottom-[-100px] lg:right-[60px]"
      >
        <CircularText />
      </div>
    </section>
  );
};

export default Hero;
