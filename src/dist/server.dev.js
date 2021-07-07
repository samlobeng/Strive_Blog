"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressListEndpoints = _interopRequireDefault(require("express-list-endpoints"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _index = _interopRequireDefault(require("./services/blogposts/index.js"));

var _errorHandlers = require("./errorHandlers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
var port = process.env.PORT || 3001; // ****************** MIDDLEWARES ****************************

server.use(_express["default"].json()); // ****************** ROUTES *******************************

server.use("/blogPosts", _index["default"]); // ****************** ERROR HANDLERS ***********************

server.use(_errorHandlers.badRequestErrorHandler);
server.use(_errorHandlers.notFoundErrorHandler);
server.use(_errorHandlers.catchAllErrorHandler);
console.table((0, _expressListEndpoints["default"])(server));

_mongoose["default"].connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(function () {
  return server.listen(port, function () {
    console.log("Server running on port ", port);
  });
})["catch"](function (err) {
  return console.log(err);
});