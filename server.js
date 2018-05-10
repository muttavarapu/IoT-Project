var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Switch = require('./api/models/iotModel'),
  Status = require('./api/models/statusModel'),
  SetPoint = require('./api/models/setPointModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/iotdb');

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/iotRoutes');
routes(app);


app.listen(port);


console.log('IOT RESTful API server started on: ' + port);
