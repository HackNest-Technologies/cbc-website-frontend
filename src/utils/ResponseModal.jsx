import { motion, AnimatePresence } from "framer-motion";
const ResponseModal = ({ open, onClose, success, title, message }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl mx-6 max-w-md w-full p-6 md:p-8 shadow-xl text-center lg:mx-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Icon */}
            <div
              className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${
                success ? "bg-[#ffb81e31]" : "bg-red-100"
              }`}
            >
              {success ? (
                <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            {/* Title */}
            <h3
              className={`mt-4 text-lg font-semibold font-inter  ${
                success ? "text-green-900" : "text-red-800"
              }`}
            >
              {title}
            </h3>

            {/* Message */}
            <p className="mt-2 text-sm text-gray-600 font-inter">{message}</p>

            {/* Button */}
            <button
              onClick={onClose}
              className={`mt-6 px-6 py-3 rounded-full text-white font-inter font-medium ${
                success ? "bg-gradient-to-b from-[#FFB91E] to-[#FC8E33]" : "bg-red-600"
              }`}
            >
              {success ? "Thank You" : "Try Again"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponseModal;
