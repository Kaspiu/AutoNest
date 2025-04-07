import { createContext, useState, useContext, useEffect } from "react";
import { saveData, loadData } from "../utils/storage";

// Storage key for garage data
const GARAGE_STORAGE_KEY = "garageCars";

// Create context
const GarageContext = createContext();

// Custom hook for using the garage context
export const useGarage = () => useContext(GarageContext);

export const GarageProvider = ({ children }) => {
  // Default garage structure with empty parking slots
  const defaultGarage = {
    P1: Array(6).fill(null),
    P2: Array(6).fill(null),
    P3: Array(6).fill(null),
  };

  // Initialize state with stored data or default
  const [floors, setFloors] = useState(() => {
    const savedData = loadData(GARAGE_STORAGE_KEY);
    return savedData || defaultGarage;
  });

  // Save data whenever floors state changes
  useEffect(() => {
    saveData(GARAGE_STORAGE_KEY, floors);
  }, [floors]);

  // Add or update a car at specific floor and position
  const handleCarUpdate = (floorKey, index, carData) => {
    setFloors((prevFloors) => {
      const updatedFloor = [...prevFloors[floorKey]];
      updatedFloor[index] = carData;

      return {
        ...prevFloors,
        [floorKey]: updatedFloor,
      };
    });
  };

  // Remove a car from specific floor and position
  const handleCarDelete = (floorKey, index) => {
    setFloors((prevFloors) => {
      const updatedFloor = [...prevFloors[floorKey]];
      updatedFloor[index] = null;

      return {
        ...prevFloors,
        [floorKey]: updatedFloor,
      };
    });
  };

  // Provide context values to child components
  return (
    <GarageContext.Provider
      value={{ floors, handleCarUpdate, handleCarDelete }}
    >
      {children}
    </GarageContext.Provider>
  );
};
