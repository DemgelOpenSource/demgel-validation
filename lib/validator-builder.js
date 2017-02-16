"use strict";
function generateValidator(name, validator) {
    return function (target, propertyKey) {
        var _val;
        var getting = false;
        function getter() {
            return _val;
        }
        var validators = Reflect.getMetadata("validators-" + propertyKey, target) || new Map();
        validators.set(name, validator);
        Reflect.defineMetadata("validators-" + propertyKey, validators, target);
        function setter(value) {
            if (_val !== value) {
                validators.forEach(function (val, key) {
                    var result = val(value);
                    if (result) {
                        // Add metadata
                        // tslint:disable-next-line:max-line-length
                        var existingErrors = Reflect.getMetadata('validation-errors', target) || new Map();
                        if (!existingErrors.has(key + ":" + propertyKey)) {
                            existingErrors.set(key + ":" + propertyKey, result);
                        }
                        Reflect.defineMetadata('validation-errors', existingErrors, target);
                    }
                    else {
                        // Attempt to remove metadata
                        // tslint:disable-next-line:max-line-length
                        var existingErrors = Reflect.getMetadata('validation-errors', target) || new Map();
                        if (existingErrors.has(key + ":" + propertyKey)) {
                            existingErrors.delete(key + ":" + propertyKey);
                        }
                        Reflect.defineMetadata('validation-errors', existingErrors, target);
                    }
                });
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
