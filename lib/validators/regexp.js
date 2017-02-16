"use strict";
var validator_builder_1 = require("../validator-builder");
/**
 * Check if a value against a RegExp
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
exports.matchRegExp = function (regExp) { return validator_builder_1.generateValidator('is-regexp-validator', function (value) {
    if (!value) {
        return null;
    }
    // Regexp only work on strings...
    if (typeof value !== 'string') {
        return "Value is not a string to match a regexp too: " + value;
    }
    var matches = value.match(regExp);
    if (matches.length > 0) {
        return null;
    }
    return "Regexp doesn't match anything: " + value;
}); };
