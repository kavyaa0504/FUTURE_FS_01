const Lead = require('../models/Lead');

exports.getStats = async (req, res) => {
  try {
    const total = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: 'New' });
    const contactedLeads = await Lead.countDocuments({ status: 'Contacted' });
    const convertedLeads = await Lead.countDocuments({ status: 'Converted' });

    res.json({ total, newLeads, contactedLeads, convertedLeads });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not fetch dashboard stats' });
  }
};
