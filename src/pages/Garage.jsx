import GNavbar from "../components/layout/GNavbar";
import GPage from "../components/sections/GPage";
import { GarageProvider } from "../context/GarageContext";

const Garage = () => {
  return (
    <GarageProvider>
      <GNavbar />
      <main>
        <GPage />
      </main>
    </GarageProvider>
  );
};

export default Garage;
