let express = require('express');
let bodyParser = require('body-parser');
let routes = require('./routes');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);
routes(app);
let port = 3001;

app.listen(port, function () {
  console.log('RESTFul API Server started on: ', port);
});
