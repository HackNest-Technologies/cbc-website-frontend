import sneakPeek from "../../assets/images/sneakpeak.png";
import SliderImg from "../../assets/images/sliderImage.jpg";
import { motion } from "motion/react";

const SneakPeek = () => (
  <section className="w-full pb-[250px] pt-[100px]">
    <section className="relative">
      <div className="w-full  relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 49"
          fill="none"
          className="w-full"
        >
          <path
            d="M249.665 47.5352C387.276 47.5351 498.882 26.2676 499.329 0H0C0.447169 26.2676 112.054 47.5352 249.665 47.5352Z"
            fill="white"
          />
        </svg>
        
      </div>
     
 <div className="absolute  inset-0 top- bottom-[40px] flex justify-center items-center overflow-hidden pt-[18px]">
        <h2 className="text-[39.58px] leading-[100%] uppercase font-satoshi font-bold ">
          Sneak peak
        </h2>
      </div>
      <motion.section
        className="flex gap-[9px] absolute top-[2px] -z-50"
        animate={{ x: [0, "-100%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
        <img src={SliderImg} className="w-[107px] h-[207px] rounded-[3.95px]" />
      </motion.section>

      <div className="w-full absolute top-[173px] right-0 left-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 49"
          fill="none"
          className="w-full"
        >
          <path
            d="M249.665 0.648438C387.276 0.648467 498.882 21.916 499.329 48.1836H0C0.447238 21.916 112.054 0.648438 249.665 0.648438Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  </section>
);

export default SneakPeek;
