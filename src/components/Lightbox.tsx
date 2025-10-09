import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface LightboxProps {
  img: string;
  text: string;
  onClose: () => void;
}

export default function Lightbox({ img, text, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-4 max-w max-h-full overflow-auto relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the lightbox
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        >
          <FaTimes />
        </button>
        <img src={img} alt="Enlarged memory" className="w-full rounded-lg" />
        <p className="text-center text-gray-800 mt-4">{text}</p>
      </div>
    </motion.div>
  );
}