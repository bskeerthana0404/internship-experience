
const express = require("express");
const router = express.Router();
const Experience = require("../models/ExperienceModel");
router.post("/", async (req, res) => {
  try {
    const { companyName, domain, experience, rating, location } = req.body; // ✅ Added location
    const newExperience = new Experience({ companyName, domain, experience, rating, location }); // ✅ Added location
    await newExperience.save();
    res.status(201).json({ message: "Experience shared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving experience", error });
  }
});
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experiences", error });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { companyName, domain, experience, rating, location } = req.body; // ✅ Added location
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      { companyName, domain, experience, rating, location }, // ✅ Added location
      { new: true }
    );
    if (!updatedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json({ message: "Experience updated", data: updatedExperience });
  } catch (error) {
    res.status(500).json({ message: "Error updating experience", error });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
    if (!deletedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting experience", error });
  }
});

module.exports = router;
