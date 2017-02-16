/**
 * A number value should be at least this amount.
 *
 * Errors if value is not a number, will not error if value is null (use @required() if value is required to be set)
 */
export declare let min: (minimum: number, inclusive?: boolean) => (target: Object, propertyKey: string) => void;
