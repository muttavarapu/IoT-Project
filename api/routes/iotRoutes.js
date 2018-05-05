'use strict';
module.exports = function(app) {
  var switchList = require('../controllers/iotController');

  // switches Routes
  app.route('/switches')
    .get(switchList.list_all_switches)
    .post(switchList.create_a_switch);


  app.route('/switch/:switchId')
    .get(switchList.read_a_switch)
    .put(switchList.update_a_switch)
    .delete(switchList.delete_a_switch);
};
