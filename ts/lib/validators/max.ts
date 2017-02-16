import {generateValidator} from '../validator-builder';

/**
 * A number value should be no greater this amount.
 *
 * Errors if value is not a number, will not error if value is null (use @required() if value is required to be set)
 */
export let max = (maximum: number, inclusive = true) => generateValidator('max-value-validator', (value) => {
    if (!value) {
        return null;
    }

    // Needs to be a number
    if (typeof value !== 'number') {
        return `Value is not a number: ${value}`;
    }

    if (inclusive && value > maximum) {
        return `Value (${value}) is greater than maximum value of ${maximum} (inclusive)`;
    } else if (value >= maximum) {
        return `Value (${value}) is greater than maximum value of ${maximum}`;
    }
    return null;
});
