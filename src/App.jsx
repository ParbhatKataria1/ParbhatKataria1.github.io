import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Stats from "./Components/Stats";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box } from "@chakra-ui/react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div style={{ marginTop: "0px" }}>
      <Box>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Stats />
        <Contact />
      </Box>
    </div>
  );
}

export default App;
