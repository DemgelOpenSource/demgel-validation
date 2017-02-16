/**
 * Check if a value against a RegExp
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
export declare let matchRegExp: (regExp: RegExp) => (target: Object, propertyKey: string) => void;
