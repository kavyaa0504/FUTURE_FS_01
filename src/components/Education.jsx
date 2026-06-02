import { motion } from 'framer-motion';

const timeline = [
  {
    title: 'B.Tech in Artificial Intelligence and Machine Learning',
    institution: 'Sri Vasavi Engineering College',
    period: '2023 – 2027',
    description: 'Focused on building intelligent systems, data pipelines, and machine learning workflows for real-world problems.',
  },
];

function Education() {
  return (
    <section id="education">
      <div className="section-heading">Education</div>
      <div className="section-grid education-grid">
        {timeline.map((item) => (
          <motion.div
            key={item.title}
            className="glass-card timeline-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline-pill">{item.period}</div>
            <h3>{item.title}</h3>
            <p className="institution">{item.institution}</p>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
