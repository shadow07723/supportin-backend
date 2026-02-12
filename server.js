const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes"); // File path check kar lein

const app = express();

// Middleware
app.use(cors()); // Ye live frontend (Vercel) se baat karne ke liye zaroori hai
app.use(express.json());

// Routes ko connect karein
// Ab aapke endpoints honge: /api/auth/register aur /api/auth/login
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is live and running!");
});

// Port setting
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
