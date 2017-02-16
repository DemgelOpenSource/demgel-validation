export abstract class ValidationModel {
    errors: Map<string, string> = new Map<string, string>();

    isValid(): boolean {
        return !(this.errors.size > 0);
    }
    toJSON() {
        const i: any = {};
        const excludeJSON: Array<string> = Reflect.getMetadata('exclude-json-property', this) || [];
        for (const prop in this) {
            if (typeof this[prop] !== 'function') {
                if (prop !== 'errors' && excludeJSON.indexOf(prop) === -1) {
                    i[prop] = this[prop];
                }
            }
        }
        return JSON.stringify(i);
    }
    fromJSON(jsonString: string, reviver?: (key, value) => any) {
        const object = JSON.parse(jsonString);

        for (const prop in object) {
            if (typeof this[prop] !== 'function') {
                this[prop] = object[prop];
            }
        }
    }
    fromObject(object: any) {
        const obj = JSON.parse(JSON.stringify(object));
        for (const prop in obj) {
            if (typeof this[prop] !== 'function') {
                this[prop] = obj[prop];
            }
        }
    }
}
