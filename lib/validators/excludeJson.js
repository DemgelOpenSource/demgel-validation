"use strict";
/**
 * Exclude a property from toJSON (only works with obj.toJSON())
 */
function excludeJSON() {
    return function (target, propertyKey) {
        var excludeJSON = Reflect.getMetadata('exclude-json-property', target) || [];
        excludeJSON.push(propertyKey);
        Reflect.defineMetadata('exclude-json-property', excludeJSON, target);
    };
}
exports.excludeJSON = excludeJSON;
