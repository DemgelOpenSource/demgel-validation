"use strict";
var validator_builder_1 = require("../validator-builder");
/**
 * A number value should be at least this amount.
 *
 * Errors if value is not a number, will not error if value is null (use @required() if value is required to be set)
 */
exports.min = function (minimum, inclusive) {
    if (inclusive === void 0) { inclusive = true; }
    return validator_builder_1.generateValidator('min-value-validator', function (value) {
        // If null return (use require for value is required)
        if (!value) {
            return null;
        }
        // Needs to be a number
        if (typeof value !== 'number') {
            return 'Value is not a number';
        }
        if (inclusive && value < minimum) {
            return "Value (" + value + ") is less than minimum value of " + minimum + " (inclusive)";
        }
        else if (value <= minimum) {
            return "Value (" + value + ") is less than minimum value of " + minimum;
        }
        return null;
    });
};
