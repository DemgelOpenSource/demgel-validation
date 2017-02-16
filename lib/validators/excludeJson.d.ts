/**
 * Exclude a property from toJSON (only works with obj.toJSON())
 */
export declare function excludeJSON(): (target: Object, propertyKey: string) => void;
