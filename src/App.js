import './App.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { MobleMenu } from './pages/MobleMenu';
import { Navbar } from './pages/Navbar';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <MobleMenu/> */}
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
