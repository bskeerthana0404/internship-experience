const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const experienceRoutes = require('./routes/experienceRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // ✅ VERY IMPORTANT
app.use('/api/experience', experienceRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error", err));

app.listen(5000, () => console.log("Server running on port 5000"));
