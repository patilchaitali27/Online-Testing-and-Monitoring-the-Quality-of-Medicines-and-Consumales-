// models/Pharmacist.js
import mongoose from 'mongoose';

const pharmacistSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  hospitalName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export const Pharmacist = mongoose.model('Pharmacist', pharmacistSchema);
