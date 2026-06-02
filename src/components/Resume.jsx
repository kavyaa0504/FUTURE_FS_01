import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import resumeFile from '../assets/resume.pdf';

function Resume() {
  return (
    <section id="resume">
      <div className="section-heading">Resume</div>
      <motion.div
        className="glass-card resume-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="resume-preview">
          <div>
            <p className="section-label">Download</p>
            <h2>Professional Resume Preview</h2>
            <p>Clean and modern resume layout built for internship applications and professional introductions.</p>
          </div>
          <a href={resumeFile} download className="button-primary">
            <FiDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;
