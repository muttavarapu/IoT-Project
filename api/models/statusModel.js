'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StatusSchema = new Schema({
  name: {
    type: String,
    default: "thermostat"
  },
  temperature: {
    type: Number,
    required: 'Enter the temperature'
  },
  status: {
    type: [{
      type: String,
      enum: ['On', 'Off']
    }],
    default: ['Off']
  }
});

module.exports = mongoose.model('Status', StatusSchema);
