import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <motion.div
        className="glow-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}

export default App;
