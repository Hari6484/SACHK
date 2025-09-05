const mongoose = require('mongoose');

const recyclingOperationSchema = new mongoose.Schema({
  operationId: { type: String, required: true, unique: true },
  wasteItemIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WasteItem' }],
  processId: { type: mongoose.Schema.Types.ObjectId, ref: 'RecyclingProcess' },
  operator: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: Date,
  status: {
    type: String,
    enum: ['planned', 'in-progress', 'completed', 'failed', 'cancelled'],
    default: 'planned'
  },
  inputWeight: { type: Number, required: true },
  outputWeight: Number,
  actualEfficiency: Number,
  energyConsumed: Number,
  notes: String,
  qualityScore: { type: Number, min: 0, max: 10 },
  productsGenerated: [{
    name: String,
    weight: Number,
    quality: String,
    potentialUse: String
  }]
});

module.exports = mongoose.model('RecyclingOperation', recyclingOperationSchema);
