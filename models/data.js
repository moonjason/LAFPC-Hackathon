const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  indicator: String,
  baseline:  String,
  update:   [ String ],
  sources: String,
  change: String,
  notes: String,
  dataStatus: String,
  group: String,
  value: String,
})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data;