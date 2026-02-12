const express = require("express");
const cors = require("cors");
require("dotenv").config(); // .env फाइल्स के लिए सबसे ऊपर
const authRoutes = require("./routes/authRoutes");

const app = express();

// 1. CORS: इसे सबसे पहले रखना ज़रूरी है
app.use(cors());

// 2. JSON Parser: डेटा पढ़ने के लिए
app.use(express.json());

// 3. API Routes
app.use("/api/auth", authRoutes);

// 4. Test Route
app.get("/", (req, res) => {
  res.send("Backend is live and running on Render!");
});

// 5. Port Setting: Render के लिए
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
