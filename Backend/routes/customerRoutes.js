const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// @route   POST /api/customers
// @desc    Create a new customer
router.post("/", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to create customer", error });
  }
});

// @route   GET /api/customers
// @desc    Get all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch customers", error });
  }
});

module.exports = router;
