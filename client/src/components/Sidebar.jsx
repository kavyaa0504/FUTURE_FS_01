import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>LeadFlow</h1>
      </div>

      <nav className="nav-links">
        <NavLink to="/dashboard" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Dashboard
        </NavLink>
        <NavLink to="/leads" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Leads
        </NavLink>
        <NavLink to="/leads/new" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Add Lead
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
