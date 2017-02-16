"use strict";
var validator_builder_1 = require("../validator-builder");
/**
 * Check if a value is a number
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
exports.isNumber = validator_builder_1.generateValidator('is-number-validator', function (value) {
    if (value && typeof value !== 'number') {
        return "Value is not a number: " + value;
    }
    return null;
});
/**
 * Check if a value is a string
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
exports.isString = validator_builder_1.generateValidator('is-string-validator', function (value) {
    if (value && typeof value !== 'string') {
        return "Value is not a string: " + value;
    }
    return null;
});
/**
 * Check if a value is a boolean
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
exports.isBoolean = validator_builder_1.generateValidator('is-boolean-validator', function (value) {
    if (value && typeof value !== 'boolean') {
        return "value is not a boolean: " + value;
    }
    return null;
});
