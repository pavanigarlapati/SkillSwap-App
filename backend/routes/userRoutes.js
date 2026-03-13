const express = require("express");
console.log("UserRoutes file loaded");
const router = express.Router();
const User = require("../models/User");

// Test route to check if routing works
router.get("/test", (req, res) => {
  res.send("User routes are working");
});

// Register user
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({
      message: "User registered successfully",
      user: user
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});
// Login user
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    // find user in database
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.json({ message: "Incorrect password" });
    }

    res.json({
      message: "Login successful",
      user: user
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});
module.exports = router;          