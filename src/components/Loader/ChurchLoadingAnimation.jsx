import { motion } from 'framer-motion';

const ChurchLoadingAnimation = ({ size = 12, color = "#111" }) => {
const dotVariants = {
  initial: {
    y: 0,
    opacity: 0.4,
    scale: 0.8,
  },
  animate: {
    y: [-6, 0],
    opacity: [0.4, 1, 0.4],
    scale: [0.8, 1.1, 0.8],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

  return (
        <motion.div
      className="flex items-center justify-center gap-2"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          variants={dotVariants}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: "50%",
            display: "block",
          }}
        />
      ))}
    </motion.div>

  );
};

export default ChurchLoadingAnimation;