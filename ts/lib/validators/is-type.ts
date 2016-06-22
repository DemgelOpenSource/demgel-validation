import {generateValidator} from "../validator-builder";

export var isNumber = generateValidator("is-number-validator", (value) => {
    if (typeof value !== 'number') {
        return "value is not a number: " + value;
    }
    return null;
});

export var isString = generateValidator("is-number-validator", (value) => {
    if (typeof value !== 'string') {
        return "value is not a string: " + value;
    }
    return null;
});

export var isBoolean = generateValidator("is-number-validator", (value) => {
    if (typeof value !== 'boolean') {
        return "value is not a boolean: " + value;
    }
    return null;
});