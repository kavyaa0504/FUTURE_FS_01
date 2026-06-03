import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createLead, fetchLead, updateLead } from '../services/leadService';
import { useToast } from '../context/ToastContext';
import LoadingSpinner from '../components/LoadingSpinner';

const sourceOptions = ['Website', 'Facebook', 'Instagram', 'LinkedIn', 'Referral'];
const statusOptions = ['New', 'Contacted', 'Converted'];

const AddEditLeadPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [lead, setLead] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'Website',
    status: 'New',
    notes: '',
    followUpDate: ''
  });

  useEffect(() => {
    if (id) {
      const loadLead = async () => {
        setLoading(true);
        try {
          const data = await fetchLead(id);
          setLead({
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || '',
            source: data.source || 'Website',
            status: data.status || 'New',
            notes: data.notes || '',
            followUpDate: data.followUpDate ? data.followUpDate.substring(0, 10) : ''
          });
        } catch (error) {
          console.error(error);
          showToast('Could not load lead', 'error');
        } finally {
          setLoading(false);
        }
      };

      loadLead();
    }
  }, [id, showToast]);

  const handleChange = (event) => {
    setLead({ ...lead, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await updateLead(id, lead);
        showToast('Lead updated successfully');
      } else {
        await createLead(lead);
        showToast('Lead added successfully');
      }
      navigate('/leads');
    } catch (error) {
      console.error(error);
      showToast('Unable to save lead', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="page-top">
        <h2 className="page-title">{id ? 'Edit Lead' : 'Add New Lead'}</h2>
        <p className="page-subtitle">Capture client details and keep your outreach organized.</p>
      </div>

      <div className="table-card">
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" value={lead.name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={lead.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="text" value={lead.phone} onChange={handleChange} required />
            </div>
            <div className="select-group">
              <label htmlFor="source">Lead Source</label>
              <select id="source" name="source" value={lead.source} onChange={handleChange}>
                {sourceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="select-group">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" value={lead.status} onChange={handleChange}>
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="followUpDate">Follow-up Date</label>
              <input id="followUpDate" name="followUpDate" type="date" value={lead.followUpDate} onChange={handleChange} />
            </div>
          </div>

          <div className="textarea-group">
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes" rows="5" value={lead.notes} onChange={handleChange} />
          </div>
          <button type="submit" className="primary" disabled={loading}>
            {loading ? <LoadingSpinner /> : id ? 'Update Lead' : 'Add Lead'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditLeadPage;
