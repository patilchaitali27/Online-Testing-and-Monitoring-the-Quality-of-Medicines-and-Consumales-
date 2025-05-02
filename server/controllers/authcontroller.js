import { Pharmacist } from '../models/Pharmacist.js';

export async function register(req, res) {
  try {
    const { fullName, hospitalName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await Pharmacist.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create and save user
    const newPharmacist = new Pharmacist({ fullName, hospitalName, email, password });
    await newPharmacist.save();

    res.status(201).json({
      message: "Registration successful",
      user: { fullName, hospitalName, email },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await Pharmacist.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        hospitalName: user.hospitalName,
        email: user.email,
      },
      token: "fake-jwt-token", // Replace with actual JWT if needed
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
}
