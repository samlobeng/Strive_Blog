"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catchAllErrorHandler = exports.badRequestErrorHandler = exports.notFoundErrorHandler = void 0;

var notFoundErrorHandler = function notFoundErrorHandler(err, req, res, next) {
  if (err.status === 404) {
    res.status(404).send(err.message || "Error not found!");
  } else {
    next(err); // I need to pass the error to the next error middleware
  }
};

exports.notFoundErrorHandler = notFoundErrorHandler;

var badRequestErrorHandler = function badRequestErrorHandler(err, req, res, next) {
  if (err.status === 400) {
    res.status(400).send(err.errors);
  } else {
    next(err);
  }
};

exports.badRequestErrorHandler = badRequestErrorHandler;

var catchAllErrorHandler = function catchAllErrorHandler(err, req, res, next) {
  res.status(500).send("Generic Server Error");
};

exports.catchAllErrorHandler = catchAllErrorHandler;