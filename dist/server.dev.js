"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressListEndpoints = _interopRequireDefault(require("express-list-endpoints"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
var port = process.env.PORT || 3001; // ****************** MIDDLEWARES ****************************

server.use(_express["default"].json()); // ****************** ROUTES *******************************

server.use("/blogposts", postRoutes); // ****************** ERROR HANDLERS ***********************
// server.use(badRequestErrorHandler)
// server.use(notFoundErrorHandler)
// server.use(catchAllErrorHandler)

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