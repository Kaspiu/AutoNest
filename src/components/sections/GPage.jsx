import { motion } from "framer-motion";
import { useGarage } from "../../context/GarageContext";
import GCard from "../ui/GCard";
import "../../styles/GPage.css";

const GPage = () => {
  // Use the garage context for data and actions
  const { floors, handleCarUpdate, handleCarDelete } = useGarage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ once: true }}
      id="gPageContainer"
    >
      {/* Render each floor with its cars */}
      {Object.entries(floors).map(([floorKey, floorCars]) => (
        <section key={floorKey} className="gPageSection">
          <h1 className="floorNum">{floorKey}</h1>
          {floorCars.map((carData, index) => (
            <GCard
              key={`${floorKey}-${index}`}
              initialData={carData}
              onSave={(newCarData) =>
                handleCarUpdate(floorKey, index, newCarData)
              }
              onDelete={() => handleCarDelete(floorKey, index)}
            />
          ))}
        </section>
      ))}
    </motion.section>
  );
};

export default GPage;
