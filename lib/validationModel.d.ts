export declare abstract class ValidationModel {
    errors: Map<string, string>;
    isValid(): boolean;
    toJSON(): string;
    fromJSON(jsonString: string, reviver?: (key, value) => any): void;
    fromObject(object: any): void;
}
