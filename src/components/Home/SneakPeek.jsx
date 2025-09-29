import sneakPeek from "../../assets/images/sneakpeak.png";
import SliderImg from "../../assets/images/sliderImage.jpg";
import { motion } from "motion/react";

const SneakPeek = () => (
  <section className="w-full pb-[250px] pt-[100px] md:pb-[600px] 2xl:pt-[150px]">
    <section className="relative">
      <div className="w-full  md:absolute md:top-[-14px] 2xl:top-[-95px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 49"
          fill="none"
          className="w-full md:hidden"
        >
          <path
            d="M249.665 47.5352C387.276 47.5351 498.882 26.2676 499.329 0H0C0.447169 26.2676 112.054 47.5352 249.665 47.5352Z"
            fill="white"
          />
        </svg>

        {/* Tab and desktop  below */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="1336"
          // height="128"
          viewBox="0 0 1336 128"
          fill="none"
          className="hidden w-full md:block"
        >
          <path
            d="M667.915 127.169C1036.06 127.169 1334.64 70.2728 1335.83 0H0C1.19442 70.2727 299.771 127.169 667.915 127.169Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="absolute  inset-0  bottom-[40px] flex justify-center items-center overflow-hidden pt-[18px] md:pt-[40px] md:bottom-[65px] lg:pt-[60px]">
        <h2 className="text-[39.58px] leading-[100%] uppercase font-satoshi text-center font-bold  md:text-[105.88px] lg:text-[150px]">
          Sneak peak
        </h2>
      </div>
      <motion.section
        className="flex gap-[9px] md:gap-[20px] absolute top-[2px] -z-50"
        animate={{ x: [0, "-100%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]" />
      </motion.section>

      <div className="w-full absolute top-[173px] right-0 left-0 md:top-[470px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 49"
          fill="none"
          className="w-full md:hidden"
        >
          <path
            d="M249.665 0.648438C387.276 0.648467 498.882 21.916 499.329 48.1836H0C0.447238 21.916 112.054 0.648438 249.665 0.648438Z"
            fill="white"
          />
        </svg>

        {/* Tab and desktop  below */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="1336"
          // height="128"
          viewBox="0 0 1336 128"
          fill="none"
        >
          <path
            d="M667.915 0.550781C1036.06 0.550781 1334.64 57.4477 1335.83 127.721H0C1.19315 57.4478 299.77 0.550825 667.915 0.550781Z"
            fill="white"
            className="hidden w-full md:block"
          />
        </svg>
      </div>
    </section>
  </section>
);

export default SneakPeek;
