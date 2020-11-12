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

var _fp = require('lodash/fp');

var _mjmlSection = require('mjml-section');

var _mjmlSection2 = _interopRequireDefault(_mjmlSection);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-body': ['mp-section'],
  'mj-wrapper': ['mp-section'],
  'mp-section': ['mp-column', 'mj-column', 'mj-group', 'mj-raw']
});

var makeBackgroundString = (0, _fp.flow)((0, _fp.filter)(_fp.identity), (0, _fp.join)(' '));
var MpSection = (_temp = _class = function (_MjSection) {
  (0, _inherits3.default)(MpSection, _MjSection);

  function MpSection() {
    (0, _classCallCheck3.default)(this, MpSection);
    return (0, _possibleConstructorReturn3.default)(this, (MpSection.__proto__ || (0, _getPrototypeOf2.default)(MpSection)).apply(this, arguments));
  }

  (0, _createClass3.default)(MpSection, [{
    key: 'isHideable',
    value: function isHideable() {
      if (this.getAttribute('pardot-repeatable') !== false) {
        return true;
      }

      return false;
    }

    // MODIFIED from https://github.com/mjmlio/mjml/blob/master/packages/mjml-section/src/index.js

  }, {
    key: 'renderSection',
    value: function renderSection() {
      var hasBackground = this.hasBackground();
      var s = '\n      <div ' + this.htmlAttributes({
        class: this.isFullWidth() ? null : this.getAttribute('css-class'),
        style: 'div',
        'pardot-repeatable': this.getAttribute('pardot-repeatable') ? "" : undefined,
        'pardot-region': this.getAttribute('pardot-region') ? "" : undefined,
        'pardot-removable': this.getAttribute('pardot-removable') ? "" : undefined
      }) + '>\n        ' + (hasBackground ? '<div ' + this.htmlAttributes({ style: 'innerDiv' }) + '>' : '') + '\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        background: this.isFullWidth() ? null : this.getAttribute('background-url'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n        >\n          <tbody>\n            <tr>\n              <td\n                ' + this.htmlAttributes({
        style: 'td'
      }) + '\n              >\n                <!--[if mso | IE]>\n                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                <![endif]-->\n                  ' + this.renderWrappedChildren() + '\n                <!--[if mso | IE]>\n                  </table>\n                <![endif]-->\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        ' + (hasBackground ? '</div>' : '') + '\n      </div>\n    ';
      return s;
    }
  }]);
  return MpSection;
}(_mjmlSection2.default), _class.allowedAttributes = (0, _extends3.default)({}, _mjmlSection2.default.allowedAttributes, {
  'pardot-removable': 'boolean',
  'pardot-repeatable': 'boolean',
  'pardot-region': 'boolean'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlSection2.default.defaultAttributes, {
  'pardot-removable': false,
  'pardot-repeatable': false,
  'pardot-region': false
}), _temp);
exports.default = MpSection;
module.exports = exports.default;