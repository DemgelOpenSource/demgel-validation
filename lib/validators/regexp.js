"use strict";
var validator_builder_1 = require("../validator-builder");
exports.matchRegExp = function (regExp) { return validator_builder_1.generateValidator('is-number-validator', function (value) {
    if (typeof value !== 'string') {
        return 'Value is not a string.';
    }
    var matches = value.match(regExp);
    if (matches.length > 0) {
        return null;
    }
    return 'Regexp doesn\'t match anything';
}); };
