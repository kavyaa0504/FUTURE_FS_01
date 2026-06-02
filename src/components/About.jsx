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
          <h2>Motivated final-year B.Tech AIML student</h2>
          <p>
            Motivated final-year B.Tech AIML student with skills in Python, Machine Learning, SQL, and Data Analytics. Passionate about AI-driven solutions and seeking an entry-level opportunity to contribute and grow in the field of software development and artificial intelligence.
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
