const mongoose = require('mongoose');
const Schema = mongoose.Schema

const photoSchema = new Schema({
  url: String,
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
})

const appointmentSchema = new Schema({
  date: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  photos: [photoSchema],
  description: {
    type: String,
    maxlength: 500,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Appointment', appointmentSchema);