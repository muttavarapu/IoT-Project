'use strict';

const util = require('util');
var mongoose = require('mongoose'),
  Status = mongoose.model('Status');

  exports.update_status = function(req, res) {
    console.log(" Update: "+util.inspect(req.body, {showHidden: false, depth: null}))
    Status.findOneAndUpdate({name: "thermostat"},{name: "thermostat",status:req.body.status,temperature:req.body.temperature},{upsert:true, new: true,
  runValidators: true}, function(err, istatus) {
    if(err)
       res.send(err);
      res.send("OK");
    });
  };

  exports.read_status = function(req, res) {
    console.log(util.inspect(req.body, {showHidden: false, depth: null}))
    Status.findOne({name:"thermostat"}, { name: 0,_id:0,__v:0 },function(err,obj) {
      res.json(obj)
    });
  };
