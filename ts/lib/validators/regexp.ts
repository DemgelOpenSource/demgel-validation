import {generateValidator} from '../validator-builder';

/**
 * Check if a value against a RegExp
 *
 * NOTE: if value is set to null will not return error (use @required)
 */
export let matchRegExp = (regExp: RegExp) => generateValidator('is-regexp-validator', (value) => {
    if (!value) {
        return null;
    }

    // Regexp only work on strings...
    if (typeof value !== 'string') {
        return `Value is not a string to match a regexp too: ${value}`;
    }
    const matches = value.match(regExp);
    if (matches.length > 0) {
        return null;
    }
    return `Regexp doesn't match anything: ${value}`;
});
