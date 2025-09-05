const mongoose = require('mongoose');

const resourceInventorySchema = new mongoose.Schema({
  resourceId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['raw-material', 'recycled-product', 'equipment', 'consumable'],
    required: true
  },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true }, // kg, pieces, liters, etc.
  location: { type: String, required: true },
  quality: {
    type: String,
    enum: ['excellent', 'good', 'acceptable', 'poor'],
    default: 'good'
  },
  lastUpdated: { type: Date, default: Date.now },
  minimumThreshold: Number,
  maximumCapacity: Number,
  source: {
    type: String,
    enum: ['earth-supply', 'recycled', 'manufactured-on-mars', 'salvaged'],
    required: true
  },
  expirationDate: Date,
  usageRate: Number // units per day
});

module.exports = mongoose.model('ResourceInventory', resourceInventorySchema);
