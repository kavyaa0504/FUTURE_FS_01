import { useEffect, useState } from 'react';
import { fetchStats } from '../services/leadService';
import LoadingSpinner from '../components/LoadingSpinner';

const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  return (
    <div>
      <div className="page-top">
        <h2 className="page-title">Dashboard</h2>
        <p className="page-subtitle">Review your lead pipeline and conversion performance.</p>
      </div>

      {loading ? (
        <div className="card">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid-4">
          <div className="card">
            <h3>Total Leads</h3>
            <p>{stats?.total ?? 0}</p>
          </div>
          <div className="card">
            <h3>New Leads</h3>
            <p>{stats?.newLeads ?? 0}</p>
          </div>
          <div className="card">
            <h3>Contacted Leads</h3>
            <p>{stats?.contactedLeads ?? 0}</p>
          </div>
          <div className="card">
            <h3>Converted Leads</h3>
            <p>{stats?.convertedLeads ?? 0}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
