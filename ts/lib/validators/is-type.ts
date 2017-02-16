import {generateValidator} from '../validator-builder';

/**
 * Check if a value is a number
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
export let isNumber = () => generateValidator('is-number-validator', (value) => {
    if (value && typeof value !== 'number') {
        return `Value is not a number: ${value}`;
    }
    return null;
});

/**
 * Check if a value is a string
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
export let isString = () => generateValidator('is-string-validator', (value) => {
    if (value && typeof value !== 'string') {
        return `Value is not a string: ${value}`;
    }
    return null;
});

/**
 * Check if a value is a boolean
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
export let isBoolean = () => generateValidator('is-boolean-validator', (value) => {
    if (value && typeof value !== 'boolean') {
        return `value is not a boolean: ${value}`;
    }
    return null;
});
