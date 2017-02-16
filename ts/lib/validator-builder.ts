export function generateValidator(name: string, validator) {
    return function (target: Object, propertyKey: string) {
        let _val;
        const getting = false;
        function getter() {
            return _val;
        }

        const validators: Map<string, any> = Reflect.getMetadata(`validators-${propertyKey}`, target) || new Map<string, any>();
        validators.set(name, validator);
        Reflect.defineMetadata(`validators-${propertyKey}`, validators, target);

        function setter(value: any) {
            if (_val !== value) {
                validators.forEach((val, key) => {
                    const result = val(value);
                    if (result) {
                        // Add metadata
                        // tslint:disable-next-line:max-line-length
                        const existingErrors: Map<string, string> = Reflect.getMetadata('validation-errors', target) || new Map<string, string>();
                        if (!existingErrors.has(`${key}:${propertyKey}`)) {
                            existingErrors.set(`${key}:${propertyKey}`, result);
                        }
                        Reflect.defineMetadata('validation-errors', existingErrors, target);
                    } else {
                        // Attempt to remove metadata
                        // tslint:disable-next-line:max-line-length
                        const existingErrors: Map<string, string> = Reflect.getMetadata('validation-errors', target) || new Map<string, string>();
                        if (existingErrors.has(`${key}:${propertyKey}`)) {
                            existingErrors.delete(`${key}:${propertyKey}`);
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
    }
};

export let testFailValidator = generateValidator('test-validator', (value) => {
    return 'There was an error';
});

export let testSuccessValidator = (options) => generateValidator('test-success-validator', (value) => {
    return null;
});
