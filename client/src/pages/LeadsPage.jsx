import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLeads, deleteLead } from '../services/leadService';
import { useToast } from '../context/ToastContext';
import LoadingSpinner from '../components/LoadingSpinner';

const statusOptions = ['All', 'New', 'Contacted', 'Converted'];

const LeadsPage = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [limit] = useState(10);
  const { showToast } = useToast();

  const loadLeads = async () => {
    try {
      setLoading(true);
      const data = await fetchLeads({ search, status, page, limit });
      setLeads(data.leads);
      setTotal(data.total);
    } catch (error) {
      console.error(error);
      showToast('Unable to load leads', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, [search, status, page]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this lead?')) {
      return;
    }
    try {
      await deleteLead(id);
      showToast('Lead deleted successfully');
      loadLeads();
    } catch (error) {
      console.error(error);
      showToast('Could not delete lead', 'error');
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <div className="page-top">
        <h2 className="page-title">Leads</h2>
        <p className="page-subtitle">Search, filter, and manage leads quickly.</p>
      </div>

      <div className="table-card">
        <div className="table-top">
          <div className="input-group">
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              placeholder="Search by name, email, or phone"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <div className="select-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setPage(1);
              }}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <Link to="/leads/new" className="primary" style={{ alignSelf: 'end' }}>
            Add Lead
          </Link>
        </div>

        {loading ? (
          <div className="card">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Follow-up</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.length ? (
                  leads.map((lead) => (
                    <tr key={lead._id}>
                      <td>{lead.name}</td>
                      <td>{lead.email}</td>
                      <td>{lead.phone}</td>
                      <td>{lead.source}</td>
                      <td>
                        <span className={`badge ${lead.status.toLowerCase()}`}>{lead.status}</span>
                      </td>
                      <td>{lead.followUpDate ? new Date(lead.followUpDate).toLocaleDateString() : '—'}</td>
                      <td>
                        <div className="action-buttons">
                          <Link to={`/leads/${lead._id}`} className="button-chip view">
                            View
                          </Link>
                          <Link to={`/leads/edit/${lead._id}`} className="button-chip edit">
                            Edit
                          </Link>
                          <button type="button" className="button-chip delete" onClick={() => handleDelete(lead._id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No leads found.</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="table-top" style={{ justifyContent: 'space-between', marginTop: '18px' }}>
              <p>
                Page {page} of {totalPages || 1}
              </p>
              <div className="action-buttons">
                <button className="button-chip secondary" disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Previous
                </button>
                <button className="button-chip secondary" disabled={page === totalPages || totalPages === 0} onClick={() => setPage(page + 1)}>
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadsPage;
