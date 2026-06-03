const Lead = require('../models/Lead');

exports.getLeads = async (req, res) => {
  try {
    const { search = '', status = 'All', page = 1, limit = 10 } = req.query;
    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    if (status && status !== 'All') {
      query.status = status;
    }

    const total = await Lead.countDocuments(query);
    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ leads, total, page: Number(page), pageSize: Number(limit) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not fetch leads' });
  }
};

exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not fetch lead details' });
  }
};

exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, source, status, notes, followUpDate } = req.body;
    const lead = new Lead({ name, email, phone, source, status, notes, followUpDate });
    await lead.save();
    res.status(201).json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not create lead' });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const { name, email, phone, source, status, notes, followUpDate, note } = req.body;
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    if (status && status !== lead.status) {
      lead.history.push({ action: 'Status updated', status, note: `Status changed from ${lead.status} to ${status}` });
    }

    if (note) {
      lead.history.push({ action: 'Note added', note });
      lead.notes = lead.notes ? `${lead.notes}\n${note}` : note;
    }

    lead.name = name || lead.name;
    lead.email = email || lead.email;
    lead.phone = phone || lead.phone;
    lead.source = source || lead.source;
    lead.status = status || lead.status;
    lead.notes = notes !== undefined ? notes : lead.notes;
    lead.followUpDate = followUpDate || lead.followUpDate;

    await lead.save();
    res.json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not update lead' });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    await lead.remove();
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not delete lead' });
  }
};
