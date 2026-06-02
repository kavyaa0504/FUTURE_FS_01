import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Spam Detection System',
    description: 'Developed a machine learning-based spam classification system using Python. Implemented preprocessing, feature extraction, and supervised learning to classify messages as spam or non-spam.',
    tech: ['Python', 'Machine Learning', 'Scikit-Learn', 'Data Preprocessing'],
    github: 'https://github.com/kavyaa0504/spam-detection-system',
    demo: '#',
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="section-heading">Projects</div>
      <div className="section-grid project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="glass-card project-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="button-group project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary">
                <FiGithub /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="button-primary">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
