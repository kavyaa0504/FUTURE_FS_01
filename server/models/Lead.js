const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  action: String,
  note: String,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  source: {
    type: String,
    required: true,
    enum: ['Website', 'Facebook', 'Instagram', 'LinkedIn', 'Referral']
  },
  status: {
    type: String,
    required: true,
    enum: ['New', 'Contacted', 'Converted'],
    default: 'New'
  },
  notes: {
    type: String,
    default: ''
  },
  followUpDate: {
    type: Date
  },
  history: {
    type: [historySchema],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Lead', leadSchema);
