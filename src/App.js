import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Technology from "./components/Technology";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PersonalLinks from "./components/PersonalLinks";
import PortFolio from "./components/PortFolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <PortFolio />
      <Technology />
      <Contact />
      <PersonalLinks />
      <SocialLinks />
    </div>
  );
}

export default App;
