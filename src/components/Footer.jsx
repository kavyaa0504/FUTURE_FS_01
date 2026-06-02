import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer-shell glass-card">
      <div className="footer-inner">
        <div>
          <p>© 2026 Kavya Cheruku</p>
          <p>Designed with React.js</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/kavyaa0504" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/kavya-cheruku-4b0a51358" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
          <a href="mailto:kavyaa0504@gmail.com">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
