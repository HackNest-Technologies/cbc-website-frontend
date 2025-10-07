import TextNewMem from "./TextNewMem";
import card from "../../assets/images/churchpicture.jpg";
import newMemberLine from "../../assets/images/new-memberLine.png";
import newMemverticalLine from "../../assets/images/newMem-verticalLine.png";
import Button from "../shared/Button";
import CircularText from "../../utils/CircularText";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CardForm = () => {
  return (
    <section className="container mx-auto py-8 px-6 md:px-0">
      <section className="lg:flex">
        <div>
          <TextNewMem />
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
                  <br /> membership class{" "}
                </Link>
                <GoArrowRight className="md:text-[40px]" />
              </div>
            </div>
          </div>
          {/* LINE */}
          <div className="absolute top-[-6vw] left-[20vw] -z-10 lg:left-[10vw] lg:top-[-4vw]">
            <img src={newMemberLine} alt="" className="w-[70%]" />
          </div>
          {/* VERTICAL LINE */}
          <div className="absolute top-[88vw] right-[20vw] -z-10 lg:top-[50vw] lg:right-[10vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              // height="146"
              viewBox="0 0 4 146"
              fill="none"
              className="h-[20vh] w-full md:hidden"
            >
              <path
                d="M2 0L1.99999 146"
                stroke="#FD9F2B"
                strokeWidth="2.29382"
                strokeDasharray="4.59 4.59"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="249"
              height="397"
              viewBox="0 0 249 397"
              fill="none"
              className="hidden w-full md:block"
            >
              <path
                d="M247.003 0V371.857C247.003 384.906 236.425 395.484 223.376 395.484H0.125"
                stroke="#FD9F2B"
                strokeWidth="2.29382"
                strokeDasharray="4.59 4.59"
              />
            </svg>
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
      <section className="relative mt-[130px] text-white">
        <img
          src={card}
          className="h-[331px] w-full rounded-[8px] md:h-[357px] md:w-[570px] md:rounded-[10.27px] lg:rounded-[15px] lg:h-[522px]  lg:w-[700px] xl:w-[948px] 2xl:w-[68vw]"
        />
        <div className="bg-black/70 absolute inset-0 rounded-[8px]  md:h-[357px] md:w-[570px] md:rounded-[10.27px]  lg:w-[700px] lg:rounded-[15px] xl:w-[948px] 2xl:w-[68vw]"></div>
        <div className="absolute inset-0 px-5 pt-[110px] lg:pt-[150px] 2xl:pt-[200px] md:px-10  xl:px-14">
          <h3 className="text-xl font-bold font-satoshi leading-[100%] md:text-[40px]">
            Step Into His Presence
          </h3>
          <p className="text-sm font-inter leading-[145%] py-4 md:text-base md:leading-[20.54px] md:w-[286px] 2xl:w-[350px]">
            Come experience life‑changing worship, and heartfelt fellowship. We
            cannot wait to welcome you!
          </p>
          <div className="py-2">
            <Button
              text="Learn More"
              link="/about"
              spanclass="sm:text-base md:text-lg"
              className="sm:text-lg sm:w-[220px] sm:justify-center sm:h-[58px] md:text-[18px]"
            />
          </div>
        </div>

        <div
          className="absolute top-[-30px] left-[30px]  
             md:top-[-85px] 
             lg:top-[-135px] lg:right-[60px]"
        >
          <CircularText />
        </div>
      </section>
    </section>
  );
};

export default CardForm;
