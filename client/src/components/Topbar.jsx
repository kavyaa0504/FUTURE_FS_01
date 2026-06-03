import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="topbar">
      <div>
        <p className="page-title">LeadFlow CRM</p>
        <p className="page-subtitle">Manage leads, follow-ups, and conversions.</p>
      </div>
      <div className="action-buttons">
        <span className="badge converted">{username || 'Admin'}</span>
        <button className="button-chip secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
