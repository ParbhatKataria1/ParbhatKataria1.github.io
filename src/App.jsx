import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Stats from './Components/Stats';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{marginTop:'0px'}} >
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Stats/>
      <Footer/>
      
    </div>
  );
}

export default App;
