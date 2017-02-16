
/**
 * Check if a value is required (if value is null, etc will add error)
 */
export function required() {
    return (target: Object, propertyKey: string) => {
        const existingRequired: Array<string> = Reflect.getMetadata('required-property', target) || [];
        existingRequired.push(propertyKey);
        Reflect.defineMetadata('required-property', existingRequired, target);
    };
}
