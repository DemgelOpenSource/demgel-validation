"use strict";
var validator_builder_1 = require("../validator-builder");
exports.isNumber = validator_builder_1.generateValidator('is-number-validator', function (value) {
    if (typeof value !== 'number') {
        return 'value is not a number: ' + value;
    }
    return null;
});
exports.isString = validator_builder_1.generateValidator('is-string-validator', function (value) {
    if (typeof value !== 'string') {
        return 'value is not a string: ' + value;
    }
    return null;
});
exports.isBoolean = validator_builder_1.generateValidator('is-boolean-validator', function (value) {
    if (typeof value !== 'boolean') {
        return 'value is not a boolean: ' + value;
    }
    return null;
});
