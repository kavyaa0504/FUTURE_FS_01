import { motion } from 'framer-motion';

const skillSections = [
  {
    heading: 'Programming Languages',
    items: ['Python', 'Java', 'C'],
  },
  {
    heading: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    heading: 'Machine Learning',
    items: ['Data Preprocessing', 'Supervised Learning', 'Model Training', 'Model Evaluation'],
  },
  {
    heading: 'Tools & Concepts',
    items: ['GitHub', 'VS Code', 'MS Office', 'Data Structures', 'OOP', 'Problem Solving'],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="section-heading">Skills</div>
      <div className="skills-grid">
        {skillSections.map((section) => (
          <motion.div
            key={section.heading}
            className="glass-card skills-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3>{section.heading}</h3>
            <div className="skill-badges">
              {section.items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
