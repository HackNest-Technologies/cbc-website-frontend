import lastBg from "../../assets/images/aboutlastImg.png";
import { Link } from "react-router-dom";
const LastSection = () => {
  return (
    <section
      className="mx-6 bg-cover h-full rounded-[5.41px] py-5 md:rounded-[14px] md:pt-[120px]"
      style={{ backgroundImage: `url(${lastBg})` }}
    >
      <div className="text-white flex flex-col items-center pt-20  px-[20px] md:pt-[150px] md:pb-10">
        <h2 className="text-base text-white font-satoshi leading-[100%] md:text-[40px]">
          A People After God’s Heart
        </h2>
        <p className="text-center text-sm leading-[120%] w-[254px] font-inter pt-2 md:text-base md:w-[350px] ">
          We live to honor God, love others, and worship Him in spirit and
          truth.
        </p>
        <Link
          to="/give"
          className="mt-5 w-[88px] h-[32px] text-center py-[4px] px-[16px] rounded-[16px] bg-[#fff] font-inter text-sm font-semibold text-black md:w-[159px] md:h-[44px] md:py-[2.16px] md:rounded-[35.94px] md:flex md:justify-center md:items-center"
        >
          Give
        </Link>
      </div>
    </section>
  );
};

export default LastSection;
