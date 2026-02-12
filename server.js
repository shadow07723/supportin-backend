const express = require("express");
const cors = require("cors");
require("dotenv").config(); // .env फाइल्स को लोड करने के लिए इसे सबसे ऊपर रखें
const authRoutes = require("./routes/authRoutes");

const app = express();

// 1. CORS Middleware (इसे Routes से पहले रखें)
app.use(cors());

// 2. JSON Body Parser (Frontend से आने वाले डेटा को पढ़ने के लिए)
app.use(express.json());

// 3. API Routes
app.use("/api/auth", authRoutes);

// 4. Test Route (Browser में चेक करने के लिए)
app.get("/", (req, res) => {
  res.send("Backend is live and running on Render!");
});

// 5. Port Setting (Render हमेशा process.env.PORT का उपयोग करता है)
const PORT = process.env.PORT || 10000; // Render का डिफ़ॉल्ट पोर्ट 10000 होता है
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
