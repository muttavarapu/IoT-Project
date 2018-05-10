'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SetPointSchema = new Schema({
  name: {
    type: String,
    default: "setpoint"
  },
  morning: {
    type: Number,
    required: 'Enter the temperature for morning'
  },
  midDay: {
    type: Number,
    required: 'Enter the temperature for noon'
  },
  evening: {
    type: Number,
    required: 'Enter the temperature for evening'
  },
  night: {
    type: Number,
    required: 'Enter the temperature for night'
  }

});

module.exports = mongoose.model('SetPoints', SetPointSchema);
