import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GCard from "../ui/GCard";
import "../../styles/GPage.css";

const GPage = () => {
  // State to store car data for each floor (P1, P2, P3)
  const [floors, setFloors] = useState({
    P1: Array(6).fill(null),
    P2: Array(6).fill(null),
    P3: Array(6).fill(null),
  });

  // Load cars data from cookies on component mount
  useEffect(() => {
    try {
      const storedCars = document.cookie
        .split(";")
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith("garageCars="));

      if (storedCars) {
        const carsData = JSON.parse(
          decodeURIComponent(storedCars.split("=")[1])
        );
        setFloors(carsData);
      }
    } catch (error) {
      console.error("Error loading cars from cookies:", error);
    }
  }, []);

  // Save cars data to cookies when floors state changes
  useEffect(() => {
    // Set cookie to expire in 180 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 180);

    document.cookie = `garageCars=${encodeURIComponent(
      JSON.stringify(floors)
    )};expires=${expiryDate.toUTCString()};path=/`;
  }, [floors]);

  // Update car data at a specific floor and position
  const handleCarUpdate = (floorKey, index, carData) => {
    setFloors((prevFloors) => ({
      ...prevFloors,
      [floorKey]: prevFloors[floorKey].map((car, i) =>
        i === index ? carData : car
      ),
    }));
  };

  // Delete car data at a specific floor and position
  const handleCarDelete = (floorKey, index) => {
    setFloors((prevFloors) => ({
      ...prevFloors,
      [floorKey]: prevFloors[floorKey].map((car, i) =>
        i === index ? null : car
      ),
    }));
  };

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
