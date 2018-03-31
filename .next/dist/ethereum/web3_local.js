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
//console.log(' --- web3 = ', web3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzX2xvY2FsLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjtBQUNBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sQUFBUCxTQUFnQixBQUFwRCxhQUFnRSxBQUFDO0FBQzdEO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUZELE9BRU0sQUFBRTtBQUNSO0FBQ0k7V0FBTyxBQUFJLEFBQUosa0JBQVMsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNSLEFBRFEsQUFBVCxBQUFQLEFBR0g7O0FBQ0QsQUFDQTtrQkFBZSxBQUFmO0FBQ0EiLCJmaWxlIjoid2ViM19sb2NhbC5qcyIsInNvdXJjZVJvb3QiOiJFOi9CbG9ja2NoYWluL05vZGVKU05ldGJlYW5zL0tpY2tzdGFydCJ9