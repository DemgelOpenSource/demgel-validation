/**
 * Exclude a property from toJSON (only works with obj.toJSON())
 */
export function excludeJSON() {
    return (target: Object, propertyKey: string) => {
        const excludeJSON: Array<string> = Reflect.getMetadata('exclude-json-property', target) || [];
        excludeJSON.push(propertyKey);
        Reflect.defineMetadata('exclude-json-property', excludeJSON, target);
    };
}