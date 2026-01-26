import { motion, AnimatePresence } from "framer-motion";
import closeImg from "../../../assets/images/closeIcon.png";
import PrayerForm from "./PrayerForm";
import { useEffect } from "react";
import "../Hero.css";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.60,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.25 },
  },
};

const PrayerPopup = ({ onclose }) => {
   // 🔒 Lock background scroll
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);
  
  return (
    <AnimatePresence>
      <motion.section
        className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm px-5 z-[9999]"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onclose} // click outside
      >
        <motion.section
          className="bg-[#E8E8E8] w-full rounded-[30px] md:w-[897px] h-[75vh] overflow-y-auto hide-scrollbar scrollbar-height"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
        >
          <div className="pt-[36px] pb-[12px] px-[36px] flex justify-between items-center">
            <h2 className="text-[24px] font-satoshi font-bold uppercase leading-[100%] md:text-[28px]">
              Submit Prayer Request
            </h2>
            <button onClick={onclose}>
              <img src={closeImg} className="w-[33px] md:w-[50px]" />
            </button>
          </div>

          <p className="border-b-[2px] border-[#FD9F2B] border-dotted md:border-[2.5px]" />

          <section className="p-[36px]">
            <PrayerForm />
          </section>
        </motion.section>
      </motion.section>
    </AnimatePresence>
  );
};

export default PrayerPopup;

