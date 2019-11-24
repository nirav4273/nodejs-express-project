"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.response = void 0;

var response = function response(res, success, status, msg, data) {
  res.status(status).send({
    success: success,
    msg: msg,
    data: data
  });
};

exports.response = response;