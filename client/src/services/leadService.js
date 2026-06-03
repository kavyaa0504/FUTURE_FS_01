import api from './api';

export const fetchLeads = async (params) => {
  const response = await api.get('/leads', { params });
  return response.data;
};

export const fetchLead = async (id) => {
  const response = await api.get(`/leads/${id}`);
  return response.data;
};

export const createLead = async (lead) => {
  const response = await api.post('/leads', lead);
  return response.data;
};

export const updateLead = async (id, data) => {
  const response = await api.put(`/leads/${id}`, data);
  return response.data;
};

export const deleteLead = async (id) => {
  const response = await api.delete(`/leads/${id}`);
  return response.data;
};

export const fetchStats = async () => {
  const response = await api.get('/dashboard/stats');
  return response.data;
};
