require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const connectDB = require("../config/dbConnect");
const corsOptions = require('../config/corsOptions');

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Use CORS middleware with options
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// User routes
app.use("/api", require("../routes/userRoutes"));

// Article routes
app.use("/api/articles", require("../routes/articleRoutes"));

// Tag routes
app.use("/api/tags", require("../routes/tagRoutes"));

// Comment routes
app.use("/api/articles", require("../routes/commentRoutes"));

// MongoDB connection events
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log('Error while connecting to MongoDB: ', err);
});
