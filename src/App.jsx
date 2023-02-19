import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Stats from './Components/Stats';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div style={{marginTop:'0px'}} >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Stats/>
      <Contact/>
      
    </div>
  );
}

export default App;
