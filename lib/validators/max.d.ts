/**
 * A number value should be no greater this amount.
 *
 * Errors if value is not a number, will not error if value is null (use @required() if value is required to be set)
 */
export declare let max: (maximum: number, inclusive?: boolean) => (target: Object, propertyKey: string) => void;
