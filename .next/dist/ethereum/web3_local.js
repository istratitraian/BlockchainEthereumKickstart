'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    // we are inthe browser
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we are on the server 
    //expose address for testing only
    web3 = new _web2.default(new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/eIwwjgj5xmZFQyh0450I'));
}
console.log(' --- web3 = ', web3);
exports.default = web3;
/*
 * web3-providers-http
 * 
 * 
 * var HttpProvider = function HttpProvider(host, timeout, headers) {
    this.host = host || 'http://localhost:8545';
    this.timeout = timeout || 0;
    this.connected = false;
    this.headers = headers;
};
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzX2xvY2FsLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7QUFDQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBcEQsYUFBZ0UsQUFBQztBQUM3RDtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0g7QUFGRCxPQUVNLEFBQUU7QUFDUjtBQUNJO1dBQU8sQUFBSSxBQUFKLGtCQUFTLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDUixBQURRLEFBQVQsQUFBUCxBQUdIOztBQUNELFFBQVEsQUFBUixJQUFZLEFBQVosZ0JBQTRCLEFBQTVCLEFBQ0E7a0JBQWUsQUFBZjtBQUNBIiwiZmlsZSI6IndlYjNfbG9jYWwuanMiLCJzb3VyY2VSb290IjoiRTovQmxvY2tjaGFpbi9Ob2RlSlNOZXRiZWFucy9LaWNrc3RhcnQifQ==