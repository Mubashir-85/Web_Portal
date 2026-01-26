const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const scholarshipRoutes = require("./routes/scholarshiproute");
const examRoutes = require("./routes/examsroutes");
const courseRoutes = require("./routes/courseroute");

const app = express();
const PORT = process.env.PORT || 5000;

/* ---------- DATABASE ---------- */
connectDB();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(express.json());

/* ---------- ROUTES ---------- */
app.get("/", (req, res) => {
  res.send("Educational Awareness Backend is running");
});

app.use("/api/scholarshiproute", scholarshipRoutes);
app.use("/api/examsroutes", examRoutes);
app.use("/api/courseroute", courseRoutes);

/* ---------- SERVER ---------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
