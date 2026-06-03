import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>404 - Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/dashboard" className="primary">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
