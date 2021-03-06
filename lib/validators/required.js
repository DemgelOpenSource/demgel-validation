"use strict";
/**
 * Check if a value is required (if value is null, etc will add error)
 */
function required() {
    return function (target, propertyKey) {
        var existingRequired = Reflect.getMetadata('required-property', target) || [];
        existingRequired.push(propertyKey);
        Reflect.defineMetadata('required-property', existingRequired, target);
    };
}
exports.required = required;
