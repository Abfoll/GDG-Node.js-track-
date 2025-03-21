const express = require("express");
//const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

// Connect to the database
//connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// Root route (optional for testing)
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
