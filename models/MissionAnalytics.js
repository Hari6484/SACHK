const mongoose = require('mongoose');

const missionAnalyticsSchema = new mongoose.Schema({
  missionDay: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  totalWasteGenerated: { type: Number, default: 0 }, // kg
  totalWasteRecycled: { type: Number, default: 0 }, // kg
  recyclingEfficiency: { type: Number, default: 0 }, // percentage
  energyConsumedRecycling: { type: Number, default: 0 }, // kWh
  resourcesSaved: { type: Number, default: 0 }, // kg equivalent
  crewUtilization: { type: Number, default: 0 }, // hours spent on waste management
  storageUtilization: { type: Number, default: 0 }, // percentage of storage used
  criticalShortages: [String],
  recyclingGoalsMet: { type: Boolean, default: false },
  notes: String
});

module.exports = mongoose.model('MissionAnalytics', missionAnalyticsSchema);
