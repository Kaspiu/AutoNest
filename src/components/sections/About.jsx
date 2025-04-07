import { motion } from "framer-motion";
import AboutCard from "../ui/AboutCard";
import "../../styles/About.css";

const About = () => {
  return (
    <section className="aboutSection" id="about">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="aboutTitle"
      >
        <h1>Your Garage, Anytime, Anywhere!</h1>
        <p>
          Your dream garage, one click from reality! <br />
          Easily add, track, and compare your vehicles anytime, anywhere.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="aboutCardContainer"
      >
        <AboutCard firstText="3 PAGES" secondText="18 SLOTS" />
        <AboutCard firstText="AutoNest" />
        <AboutCard firstText="MORE" secondText="SOON!" />
      </motion.div>
    </section>
  );
};

export default About;
