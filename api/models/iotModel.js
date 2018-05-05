'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SwitchSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of switch'
  },
  location: {
    type: String,
    required: 'Enter the location of switch'
  },
  status: {
    type: [{
      type: String,
      enum: ['On', 'Off']
    }],
    default: ['Off']
  }
});

module.exports = mongoose.model('Switches', SwitchSchema);
