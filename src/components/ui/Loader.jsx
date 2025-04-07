import { motion } from "framer-motion";
import "../../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Loader;
