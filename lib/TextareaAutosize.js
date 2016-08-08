'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * <TextareaAutosize />
                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calculateNodeHeight = require('./calculateNodeHeight');

var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emptyFunction = function emptyFunction() {};

var TextareaAutosize = (_temp = _class = function (_React$Component) {
  _inherits(TextareaAutosize, _React$Component);

  function TextareaAutosize(props) {
    _classCallCheck(this, TextareaAutosize);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextareaAutosize).call(this, props));

    _this.state = {
      height: null,
      minHeight: -Infinity,
      maxHeight: Infinity
    };
    _this._rootDOMNode = null;
    _this._resizeComponent = _this._resizeComponent.bind(_this);
    _this._onRootDOMNode = _this._onRootDOMNode.bind(_this);
    return _this;
  }

  _createClass(TextareaAutosize, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var onChange = _props.onChange;

      var props = _objectWithoutProperties(_props, ['style', 'onChange']);

      var _state = this.state;
      var height = _state.height;
      var maxHeight = _state.maxHeight;

      style = _extends({}, style, {
        height: height
      });
      maxHeight = Math.max(style.maxHeight ? style.maxHeight : Infinity, maxHeight);
      if (maxHeight < height) {
        style.overflow = 'hidden';
      }
      return _react2.default.createElement('textarea', _extends({}, props, {
        style: style,
        onChange: onChange,
        ref: this._onRootDOMNode
      }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._resizeComponent();
      window.addEventListener('resize', this._resizeComponent);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this._resizeComponent(nextProps.value || nextProps.placeholder || '');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.height !== prevState.height) {
        this.props.onHeightChange(this.state.height);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._resizeComponent);
    }
  }, {
    key: '_onRootDOMNode',
    value: function _onRootDOMNode(node) {
      this._rootDOMNode = node;
    }
  }, {
    key: '_resizeComponent',
    value: function _resizeComponent() {
      var value = arguments.length <= 0 || arguments[0] === undefined ? this.props.value || this.props.placeholder || '' : arguments[0];
      var _props2 = this.props;
      var rows = _props2.rows;
      var minRows = _props2.minRows;
      var maxRows = _props2.maxRows;
      var useCacheForDOMMeasurements = _props2.useCacheForDOMMeasurements;

      this.setState((0, _calculateNodeHeight2.default)(this._rootDOMNode, value, useCacheForDOMMeasurements, rows || minRows, maxRows));
    }

    /**
     * Read the current value of <textarea /> from DOM.
     */

  }, {
    key: 'focus',


    /**
     * Put focus on a <textarea /> DOM element.
     */
    value: function focus() {
      this._rootDOMNode.focus();
    }

    /**
     * Shifts focus away from a <textarea /> DOM element.
     */

  }, {
    key: 'blur',
    value: function blur() {
      this._rootDOMNode.blur();
    }
  }, {
    key: 'value',
    get: function get() {
      return this._rootDOMNode.value;
    }

    /**
     * Set the current value of <textarea /> DOM node.
     */
    ,
    set: function set(val) {
      this._rootDOMNode.value = val;
    }

    /**
     * Read the current selectionStart of <textarea /> from DOM.
     */

  }, {
    key: 'selectionStart',
    get: function get() {
      return this._rootDOMNode.selectionStart;
    }

    /**
     * Set the current selectionStart of <textarea /> DOM node.
     */
    ,
    set: function set(selectionStart) {
      this._rootDOMNode.selectionStart = selectionStart;
    }

    /**
     * Read the current selectionEnd of <textarea /> from DOM.
     */

  }, {
    key: 'selectionEnd',
    get: function get() {
      return this._rootDOMNode.selectionEnd;
    }

    /**
     * Set the current selectionEnd of <textarea /> DOM node.
     */
    ,
    set: function set(selectionEnd) {
      this._rootDOMNode.selectionEnd = selectionEnd;
    }
  }]);

  return TextareaAutosize;
}(_react2.default.Component), _class.propTypes = {
  /**
   * Current textarea value.
   */
  value: _react2.default.PropTypes.string.isRequired,

  /**
   * Callback on value change.
   */
  onChange: _react2.default.PropTypes.func.isRequired,

  /**
   * Callback on height changes.
   */
  onHeightChange: _react2.default.PropTypes.func,

  /**
   * Try to cache DOM measurements performed by component so that we don't
   * touch DOM when it's not needed.
   *
   * This optimization doesn't work if we dynamically style <textarea />
   * component.
   */
  useCacheForDOMMeasurements: _react2.default.PropTypes.bool,

  /**
   * Minimal numbder of rows to show.
   */
  rows: _react2.default.PropTypes.number,

  /**
   * Alias for `rows`.
   */
  minRows: _react2.default.PropTypes.number,

  /**
   * Maximum number of rows to show.
   */
  maxRows: _react2.default.PropTypes.number
}, _class.defaultProps = {
  onHeightChange: emptyFunction,
  useCacheForDOMMeasurements: false
}, _temp);
exports.default = TextareaAutosize;
