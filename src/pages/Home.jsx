import Navbar from "../components/layout/Navbar";
import Landing from "../components/sections/Landing";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <main>
      <section id="topHomeSection">
        <Navbar />
        <Landing />
      </section>
      <section id="bottomHomeSection">
        <Features />
        <About />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
