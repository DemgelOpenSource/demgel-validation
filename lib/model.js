"use strict";
var _debug = require("debug");
function Model() {
    return function (target) {
        var isValid = target.prototype.isValid;
        var debug = _debug("demgel-mvc:model:" + target.name);
        var newIsValid = function () {
            var _this = this;
            debug('validating model...');
            var required = Reflect.getMetadata('required-property', target.prototype) || [];
            this.errors.clear();
            required.forEach(function (req) {
                if (!_this[req]) {
                    _this.errors.set("required:" + req, req + " is required.");
                }
            });
            debug("found " + this.errors.size + " required errors");
            // tslint:disable-next-line:max-line-length
            var validationErrors = Reflect.getMetadata('validation-errors', target.prototype) || new Map();
            debug("found " + validationErrors.size + " validation errors");
            validationErrors.forEach(function (key, value) {
                if (!_this.errors.has(key)) {
                    debug('setting validation error');
                    _this.errors.set(key, value);
                }
            });
            //for (const error of validationErrors) {
            //    debug('processing validation error', error);
            //    if (!this.errors.has(error)) {
            //        debug('setting validation error');
            //        this.errors.set(error[0], error[1]);
            //    }
            //}
            return isValid.apply(this);
        };
        target.prototype.isValid = newIsValid;
        return target;
    };
}
exports.Model = Model;
