import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Loader from "./components/ui/Loader";
import Home from "./pages/Home";
import Garage from "./pages/Garage";
import NotFound from "./pages/NotFound";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="AutoNest/" element={<Home />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default App;
