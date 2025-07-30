// backend/routes/experienceRoutes.js
const express = require('express');
const router = express.Router();
const Experience = require('../models/experienceModel');

router.post('/', async (req, res) => {
  try {
    const { companyName, experience, rating } = req.body;
    const newExperience = new Experience({ companyName, experience, rating });
    await newExperience.save();
    res.status(201).json({ message: 'Experience saved' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving experience' });
  }
});

module.exports = router;
