"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _schema = _interopRequireDefault(require("./schema.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postsRouter = _express["default"].Router();

postsRouter.post("/", function _callee(req, res, next) {
  var newPost, _ref, _id;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newPost = new PostModel(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newPost.save());

        case 4:
          _ref = _context.sent;
          _id = _ref._id;
          res.status(201).send({
            _id: _id
          });
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);

          if (_context.t0.name === "ValidationError") {
            next((0, _httpErrors["default"])(400, _context.t0));
          } else {
            console.log(_context.t0);
            next((0, _httpErrors["default"])(500, "An error occurred while creating new post"));
          }

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
postsRouter.get("/", function _callee2(req, res, next) {
  var posts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(PostModel.find());

        case 3:
          posts = _context2.sent;
          res.send(posts);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next((0, _httpErrors["default"])(500, "An error occurred while getting users' list "));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
postsRouter.get("/:postId", function _callee3(req, res, next) {
  var postId, post;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          postId = req.params.postId;
          _context3.next = 4;
          return regeneratorRuntime.awrap(PostModel.findById(postId));

        case 4:
          post = _context3.sent;

          if (post) {
            res.send(post);
          } else {
            next((0, _httpErrors["default"])(404, "Post with _id ".concat(postId, " not found!")));
          }

          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          next((0, _httpErrors["default"])(500, "An error occurred while getting posts "));

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
postsRouter["delete"]("/:postId", function _callee4(req, res, next) {
  var postId, deletedPost;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          postId = req.params.postId;
          _context4.next = 4;
          return regeneratorRuntime.awrap(PostModel.findByIdAndDelete(postId));

        case 4:
          deletedPost = _context4.sent;

          if (deletedPost) {
            res.status(204).send();
          } else {
            next((0, _httpErrors["default"])(404, "Post with _id ".concat(postId, " not found!")));
          }

          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          next((0, _httpErrors["default"])(500, "An error occurred while deleting post ".concat(req.params.postId)));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
postsRouter.put("/:postId", function _callee5(req, res, next) {
  var postId, updatedPost;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          postId = req.params.postId;
          _context5.next = 4;
          return regeneratorRuntime.awrap(PostModel.findByIdAndUpdate(postId, req.body, {
            "new": true,
            runValidators: true
          }));

        case 4:
          updatedPost = _context5.sent;

          if (updatedPost) {
            res.send(updatedPost);
          } else {
            next((0, _httpErrors["default"])(404, "Post with _id ".concat(postId, " not found!")));
          }

          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          next((0, _httpErrors["default"])(500, "An error occurred while updating user ".concat(req.params.postId)));

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
var _default = postsRouter;
exports["default"] = _default;