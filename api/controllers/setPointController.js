'use strict';

//const util = require('util');
var mongoose = require('mongoose'),
  SetPoint = mongoose.model('SetPoints');

exports.update_set_point = function(req, res) {
    SetPoint.findOneAndUpdate({name: "setpoint"},{name: "setpoint",morning:req.body.morning,
                          midDay:req.body.midDay,evening:req.body.evening,night:req.body.night}, {upsert: true}, function(err, isetpoint) {
      if (err)
        res.send(err);
        else
        res.send("OK");
    });
  };

exports.read_setpoint = function(req, res) {
      SetPoint.findOne({name:"setpoint"}, { name: 0,_id:0,__v:0 },   function(err,obj) {
        if (err)
          res.send(err);
        else
          res.json(obj)
      });
  };
  exports.read_setpoint_list = function(req, res) {
        SetPoint.findOne({name:"setpoint"}, { name: 0,_id:0,__v:0 },   function(err,obj) {
          if (err)
            res.send(err);
          else
            res.send(""+obj.morning+ ","+ obj.midDay+ ","+obj.evening+ ","+obj.night+"");
        });
    };
