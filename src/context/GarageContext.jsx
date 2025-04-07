import { createContext, useState, useContext, useEffect } from "react";

const GarageContext = createContext();

export const useGarage = () => useContext(GarageContext);

export const GarageProvider = ({ children }) => {
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
    <GarageContext.Provider
      value={{ floors, handleCarUpdate, handleCarDelete }}
    >
      {children}
    </GarageContext.Provider>
  );
};
