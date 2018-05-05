'use strict';


var mongoose = require('mongoose'),
  Switch = mongoose.model('Switches');

exports.list_all_switches = function(req, res) {
  Switch.find({}, function(err, iswitch) {
    if (err)
      res.send(err);
    res.json(iswitch);
  });
};

exports.create_a_switch = function(req, res) {
  var new_switch = new Switch(req.body);
  new_switch.save(function(err, iswitch) {
    if (err)
      res.send(err);
    res.json(iswitch);
  });
};


exports.read_a_switch = function(req, res) {
  Switch.findById(req.params.switchId, function(err, iswitch) {
    if (err)
      res.send(err);
    res.json(iswitch);
  });
};


exports.update_a_switch = function(req, res) {
  Switch.findOneAndUpdate({_id: req.params.switchId}, req.body, {new: true}, function(err, iswitch) {
    if (err)
      res.send(err);
    res.json(iswitch);
  });
};


exports.delete_a_switch = function(req, res) {


  Switch.remove({
    _id: req.params.switchId
  }, function(err, iswitch) {
    if (err)
      res.send(err);
    res.json({ message: 'Switch successfully deleted' });
  });
};
