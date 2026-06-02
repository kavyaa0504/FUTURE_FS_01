import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certificates = [
  {
    title: 'Salesforce Agentforce Specialist (AI-201)',
    provider: 'Salesforce',
  },
  {
    title: 'Introduction to Internet of Things (IoT)',
    provider: 'NPTEL',
  },
];

function Certifications() {
  return (
    <section id="certifications">
      <div className="section-heading">Certifications</div>
      <div className="section-grid certification-grid">
        {certificates.map((item) => (
          <motion.div
            key={item.title}
            className="glass-card certification-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cert-icon">
              <FiAward />
            </div>
            <h3>{item.title}</h3>
            <span>{item.provider}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
