"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.login = void 0;

var _index = require("../../utils/index");

var login = function login(_ref, res) {
  var query, body, params, email, password;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref.query, body = _ref.body, params = _ref.params;
          email = body.email, password = body.password;
          (0, _index.response)(res, true, 200, "Login Succes", {});

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.login = login;

var signup = function signup(_ref2, res) {
  var body, email, password;
  return regeneratorRuntime.async(function signup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          body = _ref2.body;
          email = body.email, password = body.password;
          (0, _index.response)(res, true, 200, "Singup Success", {
            email: email,
            password: password
          });

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.signup = signup;