"use strict";
function generateValidator(name, validator) {
    return function (target, propertyKey) {
        var _val;
        var getting = false;
        function getter() {
            return _val;
        }
        function setter(value) {
            if (_val !== value) {
                var result = validator(value);
                if (result) {
                    // Add metadata
                    // tslint:disable-next-line:max-line-length
                    var existingErrors = Reflect.getMetadata('validation-errors', target) || new Map();
                    if (!existingErrors.has(name + ":" + propertyKey)) {
                        existingErrors.set(name + ":" + propertyKey, result);
                    }
                    Reflect.defineMetadata('validation-errors', existingErrors, target);
                }
                else {
                    // Attempt to remove metadata
                    // tslint:disable-next-line:max-line-length
                    var existingErrors = Reflect.getMetadata('validation-errors', target) || new Map();
                    if (existingErrors.has(name + ":" + propertyKey)) {
                        existingErrors.delete(name + ":" + propertyKey);
                    }
                    Reflect.defineMetadata('validation-errors', existingErrors, target);
                }
                _val = value;
            }
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
exports.generateValidator = generateValidator;
;
exports.testFailValidator = generateValidator('test-validator', function (value) {
    return 'There was an error';
});
exports.testSuccessValidator = function (options) { return generateValidator('test-success-validator', function (value) {
    return null;
}); };
