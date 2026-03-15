const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
const jobRoutes = require("./routes/jobs");
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });
