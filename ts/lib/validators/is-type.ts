import {generateValidator} from '../validator-builder';

export let isNumber = generateValidator('is-number-validator', (value) => {
    if (typeof value !== 'number') {
        return 'value is not a number: ' + value;
    }
    return null;
});

export let isString = generateValidator('is-string-validator', (value) => {
    if (typeof value !== 'string') {
        return 'value is not a string: ' + value;
    }
    return null;
});

export let isBoolean = generateValidator('is-boolean-validator', (value) => {
    if (typeof value !== 'boolean') {
        return 'value is not a boolean: ' + value;
    }
    return null;
});