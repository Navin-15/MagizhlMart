
// const express = require("express");
// const router = express.Router();
// const User = require("../models/userModel");

// // Create User
// router.post("/create", async (req, res) => {
//   try {
//     const { name, email, password, role, phone, permissions } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const newUser = new User({
//       name,
//       email,
//       password, // In production, hash the password with bcrypt
//       role,
//       phone,
//       permissions,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User created successfully", user: newUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });



// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Create user
router.post("/create", async (req, res) => {
  try {
    const { name, email, password, role, phone, permissions } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
      phone,
      permissions,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
