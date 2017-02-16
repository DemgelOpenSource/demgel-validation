"use strict";
var ValidationModel = (function () {
    function ValidationModel() {
        this.errors = new Map();
    }
    ValidationModel.prototype.isValid = function () {
        return !(this.errors.size > 0);
    };
    ValidationModel.prototype.toJSON = function () {
        var i = {};
        for (var prop in this) {
            if (typeof this[prop] !== 'function') {
                if (prop !== 'errors') {
                    i[prop] = this[prop];
                }
            }
        }
        return JSON.stringify(i);
    };
    ValidationModel.prototype.fromJSON = function (jsonString, reviver) {
        var object = JSON.parse(jsonString);
        for (var prop in object) {
            if (typeof this[prop] !== 'function') {
                this[prop] = object[prop];
            }
        }
    };
    ValidationModel.prototype.fromObject = function (object) {
        var obj = JSON.parse(JSON.stringify(object));
        for (var prop in obj) {
            if (typeof this[prop] !== 'function') {
                this[prop] = obj[prop];
            }
        }
    };
    return ValidationModel;
}());
exports.ValidationModel = ValidationModel;
