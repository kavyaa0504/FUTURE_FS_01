import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="glass-card navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar-inner">
        <div className="brand">
          <span>KC</span>
          <small>AI & ML Student</small>
        </div>

        <nav className={open ? 'nav-menu open' : 'nav-menu'}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="menu-button" onClick={() => setOpen((value) => !value)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar;
