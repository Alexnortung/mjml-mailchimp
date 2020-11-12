'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _mjmlText = require('mjml-text');

var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-column': ['mp-text'],
  'mp-column': ['mp-text'],
  'mj-hero': ['mp-text'],
  'mp-text': []
});

var MpText = (_temp = _class = function (_MjText) {
  (0, _inherits3.default)(MpText, _MjText);

  function MpText() {
    (0, _classCallCheck3.default)(this, MpText);
    return (0, _possibleConstructorReturn3.default)(this, (MpText.__proto__ || (0, _getPrototypeOf2.default)(MpText)).apply(this, arguments));
  }

  (0, _createClass3.default)(MpText, [{
    key: 'isHideable',
    value: function isHideable() {
      if (this.getAttribute('mp:hideable') !== false) {
        return true;
      }

      return false;
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var compound = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var attrs = {
        'style': 'text',
        'pardot-region': this.getAttribute('pardot-region') ? '' : undefined
      };

      if (compound === false && this.isHideable()) {
        attrs['mp:hideable'] = true;
      }
      return '\n      <div\n        ' + this.htmlAttributes(attrs) + '\n      >\n        ' + this.getContent() + '\n      </div>\n    ';
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return '\n      <div\n        ' + this.htmlAttributes({
        style: 'text',
        'pardot-region': this.getAttribute('pardot-region') ? '' : undefined,
        'pardot-removable': this.getAttribute('pardot-removable') ? '' : undefined
      }) + '\n      >\n        ' + this.getContent() + '\n      </div>\n    ';
    }
  }]);
  return MpText;
}(_mjmlText2.default), _class.allowedAttributes = (0, _extends3.default)({}, _mjmlText2.default.allowedAttributes, {
  'pardot-removable': 'boolean',
  'pardot-region': 'boolean'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlText2.default.defaultAttributes, {
  'pardot-removable': false,
  'pardot-region': false
}), _temp);
exports.default = MpText;
module.exports = exports.default;