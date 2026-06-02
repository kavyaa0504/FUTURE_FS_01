import { motion } from 'framer-motion';
import { FiActivity, FiCpu, FiCode, FiLayers } from 'react-icons/fi';

const interests = [
  { label: 'Artificial Intelligence', icon: <FiCpu /> },
  { label: 'Machine Learning', icon: <FiLayers /> },
  { label: 'Software Development', icon: <FiCode /> },
  { label: 'Problem Solving', icon: <FiActivity /> },
];

function About() {
  return (
    <section id="about">
      <div className="section-heading">About Me</div>
      <div className="about-grid">
        <motion.div
          className="glass-card about-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>AI-focused learner with a software development mindset.</h2>
          <p>
            I am a third-year B.Tech student specializing in Artificial Intelligence and Machine Learning. I have a strong foundation in Python, Java, and C programming, and I love building impactful AI-powered applications.
          </p>
          <p>
            I am actively seeking internship opportunities in AI/ML and software development while sharpening my skills through projects, certifications, and hands-on experimentation.
          </p>
        </motion.div>
        <motion.div
          className="glass-card about-cards"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          {interests.map((item) => (
            <div key={item.label} className="about-card">
              <div className="icon-box">{item.icon}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
