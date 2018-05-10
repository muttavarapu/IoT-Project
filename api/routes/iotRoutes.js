'use strict';
module.exports = function(app) {
  var iotController = require('../controllers/iotController');
  var setPointController = require('../controllers/setPointController');
  var statusController = require('../controllers/statusController');

  // switches Routes
  app.route('/switches')
    .get(iotController.list_all_switches)
    .post(iotController.create_a_switch);


  app.route('/switch/:switchId')
    .get(iotController.read_a_switch)
    .put(iotController.update_a_switch)
    .delete(iotController.delete_a_switch);



  // status Routes
  app.route('/status')
    .get(statusController.read_status)
    .put(statusController.update_status);
  // status Routes
  app.route('/setpoint')
    .get(setPointController.read_setpoint)
    .put(setPointController.update_set_point);
  app.route('/setpointlist')
    .get(setPointController.read_setpoint_list);
};
