import { motion } from "motion/react";
import TurningLogo from "../assets/images/turningLogo.png";

const CircularText = () => {
  const duration = 20;

  return (
    <div className="relative flex justify-center items-center w-[67px] h-[67px] md:w-[165px] md:h-[165px] lg:w-[208px] lg:h-[208px] rounded-full bg-[#6B6B6B]">
      {/* Inner orange circle */}
      <div className="absolute w-[101px] h-[101px] rounded-full  flex justify-center items-center">
        <img
          src={TurningLogo}
          alt="Turning Logo"
          className="w-[32px] h-[32px] object-cover md:w-[80px] md:h-[80px] lg:w-[101px] lg:h-[101px]"
        />
      </div>

      {/* Curved Text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
        className="absolute  inset-0 w-full h-full"
      >
        {/* T */}
        <span className="absolute text-[5px] left-[10px] top-[20px] rotate-[-69.821deg]  md:text-[12px] md:left-[20px] md:top-[50px] lg:text-[16px] font-inter leading-[100%] lg:left-[20px] lg:top-[75px] text-white ">
          T
        </span>

        {/* h */}
        <span className="absolute text-[5px] top-[12px] left-[15px] rotate-[-47.654deg] md:text-[12px] md:left-[28px] md:top-[38px] lg:text-[16px] font-inter leading-[100%] lg:left-[34px] lg:top-[50px] text-white ">
          h
        </span>

        {/* e */}
        <span className="absolute text-[5px]  left-[24px] top-[7px] rotate-[-26.107deg] font-inter leading-[100%]  md:text-[12px] md:left-[40px] md:top-[28px] lg:text-[16px] lg:left-[55px] lg:top-[35px] text-white ">
          e
        </span>

        {/* space */}
        <span className="absolute text-[5px] left-1/2 top-1/2">&nbsp;</span>

        {/* T */}
        <span className="absolute text-[5px] left-[40px] top-[7px] rotate-[13.168deg] md:text-[12px] md:left-[90px] md:top-[18px] lg:text-[16px] font-inter leading-[100%] lg:left-[105px] lg:top-[22px] text-white ">
          T
        </span>

        {/* u */}
        <span className="absolute text-[5px] left-[48px] top-[13px] rotate-[34.811deg] md:text-[12px] md:left-[110px] md:top-[26px] lg:text-[16px] font-inter leading-[100%] lg:left-[138px] lg:top-[33px] text-white ">
          u
        </span>

        {/* r */}
        <span className="absolute text-[5px] left-[55px] top-[20px] rotate-[55.169deg] md:text-[12px] md:left-[128px] md:top-[41px] lg:text-[16px] font-inter leading-[100%] lg:left-[165px] lg:top-[53px] text-white ">
          r
        </span>

        {/* n */}
        <span className="absolute text-[5px] left-[56px] top-[28px] rotate-[75.564deg] md:text-[12px] md:left-[135px] md:top-[62px] lg:text-[16px] font-inter leading-[100%] lg:left-[175px] lg:top-[75px] text-white ">
          n
        </span>

        {/* i */}
        <span className="absolute text-[5px] left-[57px] top-[36px] rotate-[95.052deg] md:text-[12px] md:left-[138px] md:top-[83px] lg:text-[16px] font-inter leading-[100%] lg:left-[182px] lg:top-[99px] text-white">
          i
        </span>

        {/* n */}
        <span className="absolute text-[5px] left-[54px] top-[44px] rotate-[114.493deg] md:text-[12px] md:left-[130px] md:top-[105px]  lg:text-[16px] font-inter leading-[100%] lg:left-[170px] lg:top-[120px] text-white">
          n
        </span>

        {/* g */}
        <span className="absolute text-[5px] right-[16.4px]  bottom-[11px] rotate-[136.387deg] md:text-[12px] md:right-[38px] md:bottom-[29px] lg:text-[16px] font-inter leading-[100%] lg:right-[45px] lg:bottom-[46px] text-white ">
          g
        </span>

        {/* P */}
        <span className="absolute text-[5px] right-[33px] bottom-[8px] rotate-[176.2deg] md:text-[12px] md:right-[80px] md:bottom-[18px] lg:text-[16px] font-inter leading-[100%] lg:right-[90px] lg:bottom-[27px] text-white ">
          P
        </span>

        {/* o */}
        <span className="absolute text-[5px] right-[42px] bottom-[8px] rotate-[-161.836deg] md:text-[12px] md:right-[100px] md:bottom-[18px] lg:text-[16px] font-inter leading-[100%] lg:right-[115px] lg:bottom-[27px] text-white ">
          o
        </span>

        {/* i */}
        <span className="absolute text-[5px] right-[51px] bottom-[12px] rotate-[-142.231deg] md:text-[12px] md:right-[120px] md:bottom-[30px]  lg:text-[16px] font-inter leading-[100%] lg:right-[140px] lg:bottom-[35px] text-white ">
          i
        </span>

        {/* n */}
        <span className="absolute text-[5px] right-[56px] bottom-[19px] rotate-[-122.872deg] md:text-[12px] md:right-[135px] md:bottom-[45px] lg:text-[16px] font-inter leading-[100%] lg:right-[160px] lg:bottom-[50px] text-white">
          n
        </span>

        {/* t */}
        <span className="absolute text-[5px] right-[58px] bottom-[27px] rotate-[-102.881deg] md:text-[12px] md:right-[140px] md:bottom-[68px] lg:text-[16px] font-inter leading-[100%] lg:right-[175px] lg:bottom-[75px]  text-white">
          t.
        </span>
      </motion.div>
    </div>
  );
};

export default CircularText;
