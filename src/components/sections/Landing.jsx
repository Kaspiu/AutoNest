import { Link } from "react-router";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Landing.css";

const Landing = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="landingSection"
      >
        <h1>AutoNest</h1>
        <p>
          Virtual garage where car enthusiasts can build their personal car
          collection
        </p>
        <Link to="/garage">
          <FontAwesomeIcon icon={faWarehouse} /> View your collection
        </Link>
      </motion.div>
    </section>
  );
};

export default Landing;
