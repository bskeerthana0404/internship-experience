// backend/models/experienceModel.js
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  experience: { type: String, required: true },
  rating: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Experience', experienceSchema);
