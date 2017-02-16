/**
 * The string value must match on of the supplied string values.
 *
 * Errors if value is not a number, will not error if value is null (use @required() if value is required to be set)
 */
export declare let allowedString: (...allowedStrings: string[]) => (target: Object, propertyKey: string) => void;
