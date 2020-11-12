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

var _mjmlColumn = require('mjml-column');

var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
    'mp-section': ['mp-column'],
    'mj-section': ['mp-column'],
    'mj-group': ['mp-column'],
    'mp-column': ['mp-text', 'mp-image', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-image', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text']
});

var MpColumn = (_temp = _class = function (_MjColumn) {
    (0, _inherits3.default)(MpColumn, _MjColumn);

    function MpColumn() {
        (0, _classCallCheck3.default)(this, MpColumn);
        return (0, _possibleConstructorReturn3.default)(this, (MpColumn.__proto__ || (0, _getPrototypeOf2.default)(MpColumn)).apply(this, arguments));
    }

    (0, _createClass3.default)(MpColumn, [{
        key: 'renderColumn',
        value: function renderColumn() {
            var _this2 = this;

            var children = this.props.children;

            // console.log({
            //             'pardot-repeatable': this.getAttribute('pardot-repeatable-children'),
            //         })

            return '\n        <table\n        ' + this.htmlAttributes({
                border: '0',
                cellpadding: '0',
                cellspacing: '0',
                role: 'presentation',
                style: 'table',
                width: '100%'
            }) + '\n        >\n        ' + this.renderChildren(children, {
                renderer: function renderer(component) {
                    return (// eslint-disable-line no-confusing-arrow
                        component.constructor.isRawElement() ? component.render() : '\n            <tr\n            ' + component.htmlAttributes({
                            'pardot-repeatable': _this2.getAttribute('pardot-repeatable-children') ? "" : undefined
                        }) + '\n            >\n                <td\n                ' + component.htmlAttributes({
                            align: component.getAttribute('align'),
                            'vertical-align': component.getAttribute('vertical-align'),
                            class: component.getAttribute('css-class'),
                            style: {
                                background: component.getAttribute('container-background-color'),
                                'font-size': '0px',
                                padding: component.getAttribute('padding'),
                                'padding-top': component.getAttribute('padding-top'),
                                'padding-right': component.getAttribute('padding-right'),
                                'padding-bottom': component.getAttribute('padding-bottom'),
                                'padding-left': component.getAttribute('padding-left'),
                                'word-break': 'break-word'
                            }
                        }) + '\n                >\n                ' + component.render() + '\n                </td>\n            </tr>\n            '
                    );
                }
            }) + '\n        </table>\n    ';
        }
    }]);
    return MpColumn;
}(_mjmlColumn2.default), _class.allowedAttributes = (0, _extends3.default)({}, _mjmlColumn2.default.allowedAttributes, {
    'pardot-repeatable': 'boolean',
    'pardot-removable': 'boolean',
    'pardot-repeatable-children': 'boolean'
}), _temp);
exports.default = MpColumn;
module.exports = exports.default;