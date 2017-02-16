export declare function generateValidator(name: string, validator: any): (target: Object, propertyKey: string) => void;
export declare let testFailValidator: (target: Object, propertyKey: string) => void;
export declare let testSuccessValidator: (options: any) => (target: Object, propertyKey: string) => void;
