import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faChartSimple,
  faBrush,
  faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
import FeatureBox from "../ui/FeatureBox";
import "../../styles/Features.css";

const Features = () => {
  return (
    <section className="featuresSection" id="features">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        Drive Into the Future of Virtual Garages
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="featuresContainer"
      >
        <FeatureBox
          title="Add & Organize Your Cars"
          description="Easily add vehicles to your virtual garage with details like make, model, year, and image. Organize cars into categories such as 'Daily Driver,' 'Project Car,' 'Dream Garage,' etc."
          icon={<FontAwesomeIcon icon={faCar} />}
        />

        <FeatureBox
          title="Detailed Car Stats"
          description="See how powerful each car is. Track the top speed potential of your vehicles and how fast cars reach speed milestones. Identify if the car has manual, automatic and whether it’s FWD, RWD, or AWD."
          icon={<FontAwesomeIcon icon={faChartSimple} />}
        />

        <FeatureBox
          title="Customization & Tags"
          description="Use tags and notes to track vehicle history, upgrades, or special details. Assign color-coded categories to quickly recognize different types of cars."
          icon={<FontAwesomeIcon icon={faBrush} />}
        />

        <FeatureBox
          title="Compare Vehicles"
          description="Select multiple cars to view their specs side by side. Sort and filter by best horsepower, acceleration, or top speed."
          icon={<FontAwesomeIcon icon={faCodeCompare} />}
        />
      </motion.div>
    </section>
  );
};

export default Features;
