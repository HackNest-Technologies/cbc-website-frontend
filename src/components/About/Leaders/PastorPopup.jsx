import closeImg from "../../../assets/images/closeIcon.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.25 } },
};

const PastorPopup = ({ pastor, onclose }) => {
  // 🔒 Lock scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!pastor) return null;

  return (
    <AnimatePresence>
      <motion.section
        className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm px-5 z-[1000]"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onclose} // click outside to close
      >
        <motion.section
          className="bg-[#E8E8E8] p-[36px] w-full rounded-[30px] overflow-auto md:w-[897px] lg:w-[1028px]"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={onclose}>
              <img
                src={closeImg}
                className="w-[33px] h-auto md:w-[50px] md:h-[50px] object-cover"
                alt="Close"
              />
            </button>
          </div>

          {/* Pastor Info */}
          <div className="md:flex py-3">
            <div className="w-[25%]">
              <img
                src={pastor.thumbnail}
                alt={pastor.pastorName}
                className="w-[196px] h-[196px] rounded-[10px] object-cover"
              />
              <p className="text-[24px] pt-7 font-inter font-semibold leading-[100%]">
                {pastor.pastorName}
              </p>
              <p className="text-base pt-2 pb-6 font-inter leading-[100%]">
                {pastor.role}
              </p>
            </div>

            <div className="w-[60%]">
              <p className="text-base leading-[100%] font-inter">
                {pastor.description}
              </p>
            </div>
          </div>
        </motion.section>
      </motion.section>
    </AnimatePresence>
  );
};

export default PastorPopup;
