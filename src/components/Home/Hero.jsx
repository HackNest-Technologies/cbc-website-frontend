import { Link } from "react-router-dom";
import streamIcon from "../../assets/images/stream-icon.svg";
import video from "../../assets/videos/video.mp4";
import Button from "../shared/Button.jsx";
import CircularText from "../../utils/CircularText.jsx";
import "../Home/Hero.css";

const Hero = () => {
  return (
    <section
      className="
    relative w-full
    min-h-[100svh]
    flex items-end"
    >
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div
        className="
    container mx-auto
      relative z-10
      w-full
      px-6
      pb-[clamp(40px,8vh,100px)]
      text-white
      space-y-[clamp(16px,3vh,32px)]
    "
      >
        <div className="max-w-[clamp(280px,60vw,812px)]">
          <h1
            className="
          font-satoshi font-semibold
          leading-[1]
          text-[clamp(30px,4vw,75px)]
          md:text-[clamp(30px,6vw,75px)]
         lg:text-[clamp(30px,4.5vw,75px)]
        "
          >
            Raising a People of Power, Purpose & Dominion
          </h1>

          <p
          className="
          font-inter
          mt-[clamp(8px,2vh,16px)]
          text-[clamp(16px,1.5vw,24px)]
          md:max-w-[568px]
          leading-[100%]
        ">
            Worship and serve God with us for six months, and experience a major
            testimony in your life!
          </p>
        </div>

        <div className="flex gap-[clamp(12px,2vw,16px)] mt-[clamp(16px,4vh,32px)]">
          <Button
            link="/live"
            text="Watch Live"
            icon={
              <img
                src={streamIcon}
                alt="Stream live"
                className="w-[clamp(20px,2vw,30px)] h-[clamp(20px,2vw,30px)]"
              />
            }
          />

          <Link
            to="welcome"
            className="
    inline-flex items-center justify-center
    rounded-full
    bg-gradient-to-b from-white to-[#EEF4FF]
    text-black font-inter font-medium

    h-[clamp(44px,6vh,58px)]
    w-[clamp(105px,20vw,195px)]
    px-[clamp(16px,2vw,28px)]

    text-[clamp(14px,1.2vw,18px)]
  "
          >
            I'm New
          </Link>
        </div>
      </div>

      {/* Circular Text */}
      <div
        className="absolute bottom-[-30px] right-[40px]  
          md:bottom-[-60px] md:right-[30px] 
          lg:bottom-[-100px] lg:right-[60px]">
        <CircularText />
      </div>
    </section>
  );
};

export default Hero;
