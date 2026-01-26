import card from "../../assets/images/churchpicture.jpg";
import newMemberLine from "../../assets/images/new-memberLine.png";
import newMemverticalLine from "../../assets/images/newMem-verticalLine.png";
import Button from "../shared/Button";
import CircularText from "../../utils/CircularText";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import ConvertText from "./ConvertText";

const ConvertForm = () => {
  return (
    <section className="container mx-auto py-8 px-6 md:px-0 lg:pt-20">
      <section className="lg:flex lg:gap-10">
        <div>
          <ConvertText />
        </div>
        <section className="relative mt-20 md:mt-[100px] lg:mt-[150px]">
          <div className="flex gap-3 md:gap-5">
            {/* CARD ONE */}
            <div className="relative">
              <div className="bg-black/70 absolute inset-0 bottom-[100px] rounded-[5.55px] md:rounded-[15px]  md:bottom-[220px] 2xl:h-[70%]"></div>
              <img
                src={card}
                alt=""
                className="rounded-[5.55px] md:rounded-[15px] lg:w-[502px]"
              />

              <div className="flex justify-center items-center gap-2 absolute inset-0 bottom-[-80px] text-white md:gap-3 md:bottom-[-180px] lg:bottom-[-130px]">
                <p className="underline text-[11px] font-inter leading-[150%] md:text-[32px] lg:text-[25px] 2xl:text-[32px]">
                  Fill This Form
                </p>
                <GoArrowRight className="md:text-[40px]" />
              </div>
            </div>
            {/* CARD TWO */}
            <div className="relative mt-[100px] md:mt-[220px] 2xl:mt-[270px]">
              <div className="bg-black/70 absolute inset-0 rounded-[5.55px] md:rounded-[15px]"></div>
              <img
                src={card}
                alt=""
                className="rounded-[5.55px] md:rounded-[15px] lg:w-[502px] "
              />

              <div className="flex justify-center items-center gap-2 absolute inset-0 bottom-[-160px] text-white md:bottom-[-380px] lg:bottom-[-300px]">
                <Link
                  to="/about"
                  className="underline text-[11px] font-satoshi leading-[110%] md:text-[32px] lg:text-[25px] 2xl:text-[32px]"
                >
                  Register for
                  <br /> membership class
                </Link>
                <GoArrowRight className="md:text-[40px]" />
              </div>
            </div>
          </div>
          {/* LINE */}
          <div className="absolute top-[-6vw] left-[20vw] -z-10 lg:left-[10vw] lg:top-[-4vw]">
            <img src={newMemberLine} alt="" className="w-[70%]" />
          </div>

          <div className="absolute top-[-13vw] left-[17vw] text-[#FC8E33] text-[18.58px] font-bold font-satoshi leading-[100%] flex justify-center items-center w-[27px] h-[27px] rounded-full border-[1.24px] border-[#FD9F2B]  border-dotted md:w-[70px] md:h-[70px] md:border-[3.345x] md:text-[50px] md:top-[-16vw] md:left-[16.4vw] lg:top-[-11vw] lg:left-[7vw] 2xl:top-[-9vw] 2xl:left-[8vw]">
            1
          </div>

          <div
            className="absolute top-[15.78vw] right-[17vw] text-[#FC8E33] text-[18.58px] font-bold font-satoshi leading-[100%
         ] flex justify-center items-center w-[27px] h-[27px] rounded-full border-[1.24px] border-[#FD9F2B]  border-dotted md:w-[70px] md:h-[70px] md:border-[3.345x] md:text-[50px] lg:top-[8vw] lg:right-[7.6vw] 2xl:top-[9vw] 2xl:right-[9.5vw]"
          >
            2
          </div>
        </section>
      </section>
    </section>
  );
};

export default ConvertForm;
