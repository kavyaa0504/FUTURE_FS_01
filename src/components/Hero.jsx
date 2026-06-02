import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import profileImage from '../assets/profile.jpg';
import resumeFile from '../assets/resume.pdf';

const phrases = ['AI & ML Student', 'Aspiring Software Developer', 'Machine Learning Enthusiast'];

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const fullText = phrases[phraseIndex];
    let index = 0;
    const typeInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index += 1;
      if (index > fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayText('');
          setPhraseIndex((current) => (current + 1) % phrases.length);
        }, 1800);
      }
    }, 90);

    return () => clearInterval(typeInterval);
  }, [phraseIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Hello, I am</span>
          <h1>Kavya Cheruku</h1>
          <p className="hero-subtitle">AI & Machine Learning student building smarter software and intelligent experiences.</p>
          <p className="hero-typing">{displayText}&nbsp;<span className="cursor">|</span></p>
          <div className="button-group">
            <a href="#projects" className="button-primary">
              View Projects <FiArrowRight />
            </a>
            <a href={resumeFile} download className="button-secondary">
              <FiDownload /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card glass-card"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="profile-frame">
            <img src={profileImage} alt="Kavya Cheruku" />
          </div>
          <div className="hero-featured">
            <p>AI & ML Student | Problem Solver</p>
            <div>
              <strong>Email</strong>
              <span>kavyaa0504@gmail.com</span>
            </div>
            <div>
              <strong>Location</strong>
              <span>Nidadavole, Andhra Pradesh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
