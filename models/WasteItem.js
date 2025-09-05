const mongoose = require('mongoose');

const wasteItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['packaging', 'textiles', 'structural', 'electronics', 'metal', 'plastic', 'composite']
  },
  material: { type: String, required: true },
  weight: { type: Number, required: true }, // kg
  volume: { type: Number, required: true }, // cubic meters
  condition: {
    type: String,
    enum: ['excellent', 'good', 'fair', 'poor', 'damaged'],
    default: 'good'
  },
  location: { type: String, required: true },
  dateGenerated: { type: Date, default: Date.now },
  recyclable: { type: Boolean, default: true },
  recyclingPriority: { 
    type: String, 
    enum: ['critical', 'high', 'medium', 'low'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['available', 'processing', 'recycled', 'disposed'],
    default: 'available'
  },
  potentialUses: [String],
  energyContent: Number, // kJ/kg for potential energy recovery
  toxicity: {
    type: String,
    enum: ['none', 'low', 'moderate', 'high'],
    default: 'none'
  }
});

module.exports = mongoose.model('WasteItem', wasteItemSchema);
