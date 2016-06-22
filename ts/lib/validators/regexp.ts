import {generateValidator} from "../validator-builder";

export var matchRegExp = (regExp: RegExp) => generateValidator("is-number-validator", (value) => {
    if (typeof value !== 'string') {
        return "Value is not a string.";
    }
    let matches = value.match(regExp);
    if (matches.length > 0) {
        return null;
    }
    return "Regexp doesn't match anything";
});