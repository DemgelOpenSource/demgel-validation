import * as _debug from 'debug';

export function Model() {
    return (target: any) => {
        const isValid = target.prototype.isValid;
        const debug = _debug(`demgel-mvc:model:${target.name}`);

        const newIsValid: Function = function () {
            debug('validating model...');
            const required: Array<string> = Reflect.getMetadata('required-property', target.prototype) || [];
            this.errors.clear();
            required.forEach(req => {
                if (!this[req]) {
                    this.errors.set(`required:${req}`, `${req} is required.`);
                }
            });
            debug(`found ${this.errors.size} required errors`);

            // tslint:disable-next-line:max-line-length
            const validationErrors: Map<string, string> = Reflect.getMetadata('validation-errors', target.prototype) || new Map<string, string>();
            debug(`found ${validationErrors.size} validation errors`);
            validationErrors.forEach((value, key) => {
                if (!this.errors.has(key)) {
                    debug('setting validation error');
                    this.errors.set(key, value);
                }
            });
            return isValid.apply(this);
        };

        target.prototype.isValid = newIsValid;

        return target;
    };
}
