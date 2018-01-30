"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _geomiconsOpen = require("geomicons-open");

var _geomiconsOpen2 = _interopRequireDefault(_geomiconsOpen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? "warning" : _ref$name,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? "1em" : _ref$size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? "currentColor" : _ref$fill,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["name", "size", "fill", "width", "height"]);

  var path = _geomiconsOpen2.default[name];

  return _react2.default.createElement(
    "svg",
    _extends({}, props, {
      width: width || size,
      height: height || size,
      fill: fill,
      "data-id": "geomicon-" + name,
      viewBox: "0 0 32 32"
    }),
    _react2.default.createElement("path", { d: path })
  );
};

Icon.propTypes = {
  name: _propTypes2.default.oneOf(Object.keys(_geomiconsOpen2.default)),
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  fill: _propTypes2.default.string
};

exports.default = Icon;