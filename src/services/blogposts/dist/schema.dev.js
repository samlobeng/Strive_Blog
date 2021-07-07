"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var PostSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  readTime: {
    value: {
      type: Number
    },
    unit: {
      type: String
    }
  },
  author: {
    name: {
      type: String
    },
    avatar: {
      type: String
    }
  },
  content: {
    type: String,
    required: true
  },
  comments: [{
    commentId: String,
    title: String,
    comment: String
  }]
}, {
  timestamps: true // adding createdAt and modifiedAt automatically

});

var _default = model("Posts", PostSchema); // bounded to "posts" collection


exports["default"] = _default;