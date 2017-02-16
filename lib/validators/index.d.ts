export * from './required';
export * from './is-type';
export * from './regexp';
export * from './min';
export * from './max';
export * from './string-values';
export * from './excludeJson';
export declare const Validators: {
    required: () => (target: Object, propertyKey: string) => void;
    isString: () => (target: Object, propertyKey: string) => void;
    isBoolean: () => (target: Object, propertyKey: string) => void;
    isNumber: () => (target: Object, propertyKey: string) => void;
    min: (minimum: number, inclusive?: boolean) => (target: Object, propertyKey: string) => void;
    max: (maximum: number, inclusive?: boolean) => (target: Object, propertyKey: string) => void;
    matchRegExp: (regExp: RegExp) => (target: Object, propertyKey: string) => void;
    allowedString: (...allowedStrings: string[]) => (target: Object, propertyKey: string) => void;
    excludeJSON: () => (target: Object, propertyKey: string) => void;
};
