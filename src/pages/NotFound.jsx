import Navbar from "../components/layout/GNavbar";
import Error404 from "../components/ui/Error404";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <main>
      <section id="notFoundSection">
        <Navbar />
        <Error404 />
      </section>
    </main>
  );
};

export default NotFound;
