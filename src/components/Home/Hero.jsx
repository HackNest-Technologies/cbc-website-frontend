import { Link } from "react-router-dom";
import streamIcon from "../../assets/images/stream-icon.svg";
import video from "../../assets/videos/video.mp4";
import Button from "../shared/Button.jsx";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-end pb-[60px]">
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
      <div className="relative z-10 container mx-auto px-6 text-white space-y-8">
        <div className="space-y-2 md:space-y-4 w-[300px] md:w-[673px]">
          <h1 className="font-semibold text-[32px] font-satoshi leading-[100%] sm:text-[64px] md:text-[75px]">
            Raising a People of Power, Purpose & Dominion
          </h1>
          <p className="text-base font-inter leading-[100%] pt-[5px] sm:w-[578px] sm:text-2xl">
            Worship and serve God with us for six months, and experience a major
            testimony in your life!
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            text="Watch Live"
            icon={<img src={streamIcon} alt="Stream live" />}
            className="sm:text-lg sm:w-[220px] sm:justify-center sm:h-[58p"
          />
          <Link className="w-[105px] h-[35px] text-center text-sm font-inter font-medium leading-[150%] rounded-[19.15px]  py-[4px] text-[#000] bg-gradient-to-b from-white to-[#EEF4FF] border  border-b-white sm:py-4 sm:text-lg sm:w-[220px] sm:inline-block sm:text-center sm:h-[58px]">
            I'm New
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
