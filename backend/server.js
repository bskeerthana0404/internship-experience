// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Import experience routes
// const experienceRoutes = require("./routes/experienceRoutes");
// app.use("/api/experiences", experienceRoutes);

// // Connect to DB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

















/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Loginroutes = require('./routes/loginRoutes');
const ExperienceRoutes = require('./routes/experienceRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api', Loginroutes);
app.use('/api/experience', ExperienceRoutes);

// DATABASE + SERVER
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));*/















 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// ✅ Add both login and experience routes
app.use('/api', require('./routes/loginRoutes'));
app.use('/api/experience', require('./routes/experienceRoutes')); // <--- ADD THIS LINE

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
