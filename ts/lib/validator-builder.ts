export function generateValidator(name: string, validator) {
        return function (target: Object, propertyKey: string) {
            let _val;
            const getting = false;
            function getter() {
                return _val;
            }

            function setter(value: any) {
                if (_val !== value) {
                    const result = validator(value);
                    if (result) {
                        // Add metadata
                        // tslint:disable-next-line:max-line-length
                        const existingErrors: Map<string, string> = Reflect.getMetadata('validation-errors', target) || new Map<string, string>();
                        if (!existingErrors.has(`${name}:${propertyKey}`)) {
                            existingErrors.set(`${name}:${propertyKey}`, result);
                        }
                        Reflect.defineMetadata('validation-errors', existingErrors, target);
                    } else {
                        // Attempt to remove metadata
                        // tslint:disable-next-line:max-line-length
                        const existingErrors: Map<string, string> = Reflect.getMetadata('validation-errors', target) || new Map<string, string>();
                        if (existingErrors.has(`${name}:${propertyKey}`)) {
                            existingErrors.delete(`${name}:${propertyKey}`);
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
        }
    };

export let testFailValidator = generateValidator('test-validator', (value) => {
        return 'There was an error';
    });

export let testSuccessValidator = (options) => generateValidator('test-success-validator', (value) => {
    return null;
});
