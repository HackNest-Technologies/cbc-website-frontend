import sneekPeak from "../../data/sneekPeak";
import { motion } from "motion/react";

const SneakPeek = () => (
  <section className="w-full pb-[250px] pt-[100px] md:pb-[600px] lg:pt-[180px] xl:pt-[200px] 2xl:pt-[150px]">
    <section className="relative">
      <motion.section
        className="flex gap-[9px] md:gap-[20px] absolute top-[2px] -z-50"
        animate={{ x: [0, "-100%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {sneekPeak.map((item,index) => (
          <img
          key={index}
            src={item}
            className="w-[107px] h-[202px] min-[400px]:h-[207px] object-cover rounded-[3.95px] md:w-[287px] md:h-[550px] md:rounded-[10.57px]"
          />
        ))}
      </motion.section>
      
    </section>
  </section>
);

export default SneakPeek;
