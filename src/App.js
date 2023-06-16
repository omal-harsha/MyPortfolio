import { useEffect } from 'react';
import './App.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { MobleMenu } from './pages/MobleMenu';
import { Navbar } from './pages/Navbar';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

//import motion
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion';



function App() {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <AnimatePresence initial={true} mode='wait'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </AnimatePresence>
    </div>
  );
}

export default App;
