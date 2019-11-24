"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = require("../../controller/auth/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])(); // Login Route

router.post("/login", _index.login);
router.post("/signup", _index.signup);
module.exports = router;