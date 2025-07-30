const express = require("express");
const router = express.Router();
const Experience = require("../models/ExperienceModel");

// POST: Add a new experience
router.post("/", async (req, res) => {
  try {
    const { email, company, experience, rating } = req.body;
    const newExperience = new Experience({ email, company, experience, rating });
    await newExperience.save();
    res.status(201).json({ message: "Experience shared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving experience", error });
  }
});

// GET: Get all experiences
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experiences", error });
  }
});

module.exports = router;
