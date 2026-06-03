import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchLead, updateLead } from '../services/leadService';
import { useToast } from '../context/ToastContext';
import LoadingSpinner from '../components/LoadingSpinner';

const statusOptions = ['New', 'Contacted', 'Converted'];

const LeadDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [lead, setLead] = useState(null);
  const [status, setStatus] = useState('New');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadLead = async () => {
      setLoading(true);
      try {
        const data = await fetchLead(id);
        setLead(data);
        setStatus(data.status);
      } catch (error) {
        console.error(error);
        showToast('Unable to load lead details', 'error');
      } finally {
        setLoading(false);
      }
    };
    loadLead();
  }, [id, showToast]);

  const handleUpdate = async () => {
    setSaving(true);
    try {
      await updateLead(id, { status, note });
      showToast('Lead details updated');
      setNote('');
      const refreshed = await fetchLead(id);
      setLead(refreshed);
      setStatus(refreshed.status);
    } catch (error) {
      console.error(error);
      showToast('Unable to update lead', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="card">
        <LoadingSpinner />
      </div>
    );
  }

  if (!lead) {
    return <p>Lead not found</p>;
  }

  return (
    <div>
      <div className="page-top">
        <h2 className="page-title">Lead Details</h2>
        <p className="page-subtitle">Review history and update the next action.</p>
      </div>

      <div className="grid-4" style={{ marginBottom: '20px' }}>
        <div className="card">
          <h3>Full Name</h3>
          <p>{lead.name}</p>
        </div>
        <div className="card">
          <h3>Email</h3>
          <p>{lead.email}</p>
        </div>
        <div className="card">
          <h3>Phone</h3>
          <p>{lead.phone}</p>
        </div>
        <div className="card">
          <h3>Lead Source</h3>
          <p>{lead.source}</p>
        </div>
      </div>

      <div className="table-card">
        <div className="form-row">
          <div className="select-group">
            <label htmlFor="status">Update Status</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>Follow-up Date</label>
            <p>{lead.followUpDate ? new Date(lead.followUpDate).toLocaleDateString() : 'None scheduled'}</p>
          </div>
        </div>

        <div className="textarea-group">
          <label htmlFor="note">Add Note</label>
          <textarea
            id="note"
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add an update or follow-up note"
          />
        </div>

        <div className="action-buttons" style={{ marginTop: '10px' }}>
          <button className="primary" onClick={handleUpdate} disabled={saving}>
            {saving ? <LoadingSpinner /> : 'Save Changes'}
          </button>
          <button className="button-chip secondary" type="button" onClick={() => navigate('/leads')}>
            Back to Leads
          </button>
        </div>
      </div>

      <div className="table-card">
        <h3>Lead History</h3>
        {lead.history.length ? (
          <table className="table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Note</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {lead.history.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.action}</td>
                  <td>{entry.note || entry.status || '—'}</td>
                  <td>{new Date(entry.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No lead history yet.</p>
        )}
      </div>
    </div>
  );
};

export default LeadDetailsPage;
