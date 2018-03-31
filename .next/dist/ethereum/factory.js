'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web3_local = require('./web3_local');

var _web3_local2 = _interopRequireDefault(_web3_local);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web3_local2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xaBc79Ee9Df4CF84FF451aC3996c5cf020bCeF656'
//        '0xFCD00AE7E89331AA2D23c6c9F9b3f5F79CEE3289'
);
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7Ozs7O0FBRTVCLElBQU0sZUFBZSxxQkFBQSxBQUFLLElBQVQsQUFBYSxTQUN0QixLQUFBLEFBQUssTUFBTSwwQkFERixBQUNULEFBQTJCLFlBQzNCO0FBRlIsQUFBaUIsQUFHakIsQUFFQTtBQUxpQjtrQkFLakIsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkU6L0Jsb2NrY2hhaW4vTm9kZUpTTmV0YmVhbnMvS2lja3N0YXJ0In0=