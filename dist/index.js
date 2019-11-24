"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _index = require("./utils/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Routes
var app = (0, _express["default"])();
app.use((0, _bodyParser["default"])()); // End-points

app.use('/auth', _auth["default"]);
app.listen(process.env.PORT || 3000, function () {
  _index.debug.log("> App Running On ".concat(process.env.PORT || 3000));
});