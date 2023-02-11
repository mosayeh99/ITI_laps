"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Saving_Account = exports.Current_Account = exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.getBalance = function () {
        return this.Balance;
    };
    return Account;
}());
exports.Account = Account;
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(Date_of_opening, Interest_rate) {
        var _this = _super.call(this) || this;
        _this.Date_of_opening = Date_of_opening;
        _this.Interest_rate = Interest_rate;
        return _this;
    }
    Current_Account.prototype.addCustomer = function () {
        return "Customer Added";
    };
    ;
    Current_Account.prototype.removeCustomer = function () {
        return "Customer Removed";
    };
    return Current_Account;
}(Account));
exports.Current_Account = Current_Account;
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(Date_of_opening, Min_Balance) {
        var _this = _super.call(this) || this;
        _this.Date_of_opening = Date_of_opening;
        _this.Min_Balance = Min_Balance;
        return _this;
    }
    Saving_Account.prototype.addCustomer = function () {
        return "Customer Added";
    };
    ;
    Saving_Account.prototype.removeCustomer = function () {
        return "Customer Removed";
    };
    return Saving_Account;
}(Account));
exports.Saving_Account = Saving_Account;
