/**
 * Check if a value is a number
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
export declare let isNumber: () => (target: Object, propertyKey: string) => void;
/**
 * Check if a value is a string
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
export declare let isString: () => (target: Object, propertyKey: string) => void;
/**
 * Check if a value is a boolean
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
export declare let isBoolean: () => (target: Object, propertyKey: string) => void;
