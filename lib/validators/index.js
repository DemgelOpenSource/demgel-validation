"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var required = require("./required");
var isType = require("./is-type");
var min = require("./min");
var max = require("./max");
var regexp = require("./regexp");
var stringValues = require("./string-values");
var excludeJSON = require("./excludeJson");
__export(require("./required"));
__export(require("./is-type"));
__export(require("./regexp"));
__export(require("./min"));
__export(require("./max"));
__export(require("./string-values"));
__export(require("./excludeJson"));
exports.Validators = {
    required: required.required,
    isString: isType.isString,
    isBoolean: isType.isBoolean,
    isNumber: isType.isNumber,
    min: min.min,
    max: max.max,
    matchRegExp: regexp.matchRegExp,
    allowedString: stringValues.allowedString,
    excludeJSON: excludeJSON.excludeJSON
};
