// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// router.post("/signup", async (req, res) => {
//   const { email, password } = req.body;
//   const existing = await User.findOne({ email });
//   if (existing) return res.status(400).json({ message: "User already exists" });

//   const user = new User({ email, password });
//   await user.save();
//   res.status(201).json({ message: "User created" });
// });

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email, password });
//   if (!user) return res.status(401).json({ message: "Invalid credentials" });

//   res.json({ message: "Login successful" });
// });

// module.exports = router;






















































































//const express = require('express');
//const router = express.Router();
//const Login = require('../models/User');

//router.post('/login', async (req, res) => {
 // const { email, password } = req.body;

  //try {
   // const user = await Login.findOne({ email, password });

   // if (!user) {
   //   return res.status(401).json({ message: 'Invalid email or password' });
   // }

   // res.json({ message: 'Login successful', user });
  //} catch (err) {
   // res.status(500).json({ message: 'Server error' });
  //}
//});

//module.exports = router;

























const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate email and common password
  if (!email.endsWith('@gtec.ac.in')) {
    return res.status(400).json({ message: 'Only college emails are allowed' });
  }

  if (password !== 'gtec@123') {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  try {
    // Save or find user
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