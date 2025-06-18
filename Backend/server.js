const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Email = require("./Models/Email");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Sample Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const EmailSchema = new mongoose.Schema({
  email: String,
});



//save email
app.post("/save-email", async (req, res) => {
    try {
      const { email } = req.body;
  
      // Check if email is already registered
      const existingEmail = await Email.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const newEmail = new Email({ email });
      await newEmail.save();
  
      res.json({ message: "Email saved successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error saving email" });
    }
  });

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
