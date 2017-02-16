import * as required from './required';
import * as isType from './is-type';
import * as min from './min';
import * as max from './max';
import * as regexp from './regexp';
import * as stringValues from './string-values';
import * as excludeJSON from './excludeJson';

export * from './required';
export * from './is-type';
export * from './regexp';
export * from './min';
export * from './max';
export * from './string-values';
export * from './excludeJson';

export const Validators = {
    required: required.required,
    isString: isType.isString,
    isBoolean: isType.isBoolean,
    isNumber: isType.isNumber,
    min: min.min,
    max: max.max,
    matchRegExp: regexp.matchRegExp,
    allowedString: stringValues.allowedString,
    excludeJSON: excludeJSON.excludeJSON
};

