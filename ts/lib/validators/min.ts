import {generateValidator} from '../validator-builder';

/**
 * A number value should be at least this amount.
 *
 * Errors if value is not a number, will not error if value is null (use @required() if value is required to be set)
 */
export let min = (minimum: number, inclusive = true) => generateValidator('min-value-validator', (value) => {
    // If null return (use require for value is required)
    if (!value) {
        return null;
    }

    // Needs to be a number
    if (typeof value !== 'number') {
        return 'Value is not a number';
    }

    if (inclusive && value < minimum) {
        return `Value (${value}) is less than minimum value of ${minimum} (inclusive)`;
    } else if (value <= minimum) {
        return `Value (${value}) is less than minimum value of ${minimum}`;
    }
    return null;
});
