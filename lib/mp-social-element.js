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

var _mjmlSocial = require('mjml-social');

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
    'mj-social': ['mp-social-element'],
    'mp-social-element': []
});

var MpSocialElement = (_temp = _class = function (_SocialElement) {
    (0, _inherits3.default)(MpSocialElement, _SocialElement);

    function MpSocialElement() {
        (0, _classCallCheck3.default)(this, MpSocialElement);
        return (0, _possibleConstructorReturn3.default)(this, (MpSocialElement.__proto__ || (0, _getPrototypeOf2.default)(MpSocialElement)).apply(this, arguments));
    }

    (0, _createClass3.default)(MpSocialElement, [{
        key: 'render',
        value: function render() {
            var _getSocialAttributes = this.getSocialAttributes(),
                src = _getSocialAttributes.src,
                srcset = _getSocialAttributes.srcset,
                sizes = _getSocialAttributes.sizes,
                href = _getSocialAttributes.href,
                iconSize = _getSocialAttributes['icon-size'],
                iconHeight = _getSocialAttributes['icon-height'];

            var hasLink = !!this.getAttribute('href');

            return '\n        <tr\n        ' + this.htmlAttributes({
                class: this.getAttribute('css-class'),
                'pardot-repeatable': this.getAttribute('pardot-repeatable') ? "" : undefined,
                'pardot-removable': this.getAttribute('pardot-removable') ? "" : undefined,
                'pardot-region': this.getAttribute('pardot-region') ? "" : undefined
            }) + '\n        >\n        <td ' + this.htmlAttributes({ style: 'td' }) + '>\n            <table\n            ' + this.htmlAttributes({
                border: '0',
                cellpadding: '0',
                cellspacing: '0',
                role: 'presentation',
                style: 'table'
            }) + '\n            >\n            <tr>\n                <td ' + this.htmlAttributes({ style: 'icon' }) + '>\n                ' + (hasLink ? '<a ' + this.htmlAttributes({
                href: href,
                rel: this.getAttribute('rel'),
                target: this.getAttribute('target')
            }) + '>' : '') + '\n                    <img\n                        ' + this.htmlAttributes({
                alt: this.getAttribute('alt'),
                title: this.getAttribute('title'),
                height: parseInt(iconHeight || iconSize, 10),
                src: src,
                style: 'img',
                width: parseInt(iconSize, 10),
                sizes: sizes,
                srcset: srcset
            }) + '\n                    />\n                    ' + (hasLink ? '</a>' : '') + '\n                </td>\n                </tr>\n            </table>\n        </td>\n        ' + (this.getContent() ? '\n            <td ' + this.htmlAttributes({ style: 'tdText' }) + '>\n            ' + (hasLink ? '<a\n                ' + this.htmlAttributes({
                href: href,
                style: 'text',
                rel: this.getAttribute('rel'),
                target: this.getAttribute('target')
            }) + '>' : '<span\n                    ' + this.htmlAttributes({
                style: 'text'
            }) + '>') + '\n                ' + this.getContent() + '\n            ' + (hasLink ? '</a>' : '</span>') + '\n            </td>\n            ' : '') + '\n        </tr>\n    ';
        }
    }]);
    return MpSocialElement;
}(_mjmlSocial.SocialElement), _class.allowedAttributes = (0, _extends3.default)({}, _mjmlSocial.SocialElement.allowedAttributes, {
    'pardot-repeatable': 'boolean',
    'pardot-removable': 'boolean',
    'pardot-region': 'boolean'
}), _temp);
exports.default = MpSocialElement;
module.exports = exports.default;