"use strict";
const validator_builder_1 = require("../validator-builder");
exports.matchRegExp = (regExp) => validator_builder_1.generateValidator("is-number-validator", (value) => {
    if (typeof value !== 'string') {
        return "Value is not a string.";
    }
    let matches = value.match(regExp);
    if (matches.length > 0) {
        return null;
    }
    return "Regexp doesn't match anything";
});
