/// <reference types="lodash" />
export declare abstract class ValidatableModel {
    errors: Map<string, string>;
    isValid(): boolean;
    toJSON(): any;
}
