"use strict";
var validator_builder_1 = require("../validator-builder");
/**
 * The string value must match on of the supplied string values.
 *
 * Errors if value is not a number, will not error if value is null (use @required() if value is required to be set)
 */
exports.allowedString = function () {
    var allowedStrings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedStrings[_i] = arguments[_i];
    }
    return validator_builder_1.generateValidator('allowed-string-validator', function (value) {
        if (!value) {
            return null;
        }
        // Needs to be a number
        if (typeof value !== 'string') {
            return 'Value is not a string';
        }
        if (allowedStrings.indexOf(value) < 0) {
            return "Value (" + value + ") is not allowed for this string.";
        }
        return null;
    });
};
