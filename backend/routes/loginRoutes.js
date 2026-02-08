
const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email.endsWith('@gtec.ac.in')) {
    return res.status(400).json({ message: 'Only college emails are allowed' });
  }
  if (password !== 'gtec@123') {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email });
      await user.save();
    }
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router;