const express = require('express');
const router = express.Router();
const Experience = require('../models/experienceModel');

// POST /api/experience
router.post('/', async (req, res) => {
  try {
    const { companyName, experience, rating } = req.body;
    const newExperience = new Experience({ companyName, experience, rating });
    await newExperience.save();
    res.status(201).json({ message: 'Experience saved!' });
  } catch (err) {
    console.error(err);  // ✅ this shows error in terminal
    res.status(500).json({ error: 'Failed to save experience' });
  }
});

module.exports = router;
