# Demgel Validation Decorators

## What is this?
There are times when you want to validate an object and assure that all properties are valid values.

## Example

``` typescript
import {ValidationModel, Model, isNumber, isString} from "@demgel/validation";

@Model
export class SomeModel extends ValidationModel {
    @required()
    @isNumber()
    aNumber: number;

    @required()
    @isString()
    aString: string;
}
```

To check that a model is valid just use `isValid()`.

``` typescript
if (someModel.isValid()) {
    // Do something with the data...
} else {
    // report Error
    this.errors.forEach((error, message) => {
        console.log(`${error}: ${message}`);
    };
}
```

If there is an error the model will contain a property called `errors`. `errors` is a `Map<string, string>`.

## Custom Validators

You can write your own validators by using the `generateValidator` function.

returning `null` equals no error, returning a string will set the validator to error.

``` typescript
export declare function generateValidator(name: string, validator: any): (target: Object, propertyKey: string) => void;
```

``` typescript
export var someValidator = (options) => generateValidator("someValidator", (value) => {
    // Check the value to see if it matches
    if (valueisnotgood) {
        return "Value is not right";
    }
    return null;
}

export var anotherValidator = generateValidator("anotherValidator", (value) => {
    // Check the value to see if it is correct
    return null;
}
```

The first example, someValidator, would be used like this:
``` typescript
@Model()
export class SomeClass extends ValidatableModel {
    @someValidator("somepassedinvalue")
    property: string;
}
```

The second example, anotherValidator, would be used like this:
``` typescript
@Model()
export class SomeClass extends ValidatableModel {
    @anotherValidator
    property: string;
}
```

## Parsing Object/JSON into/from Models

### TO JSON

You should (and probably best) use the obj.toJSON() function from a `ValidationModel` to convert a Model to JSON.
There are some underlying functions and values that should not be serialized, such as `error`.

Also there is a decorator that you can use `excludeJSON` that will let you mark properties that should be excluded
from the JSON output.

``` typescript
@Model()
export class JSONClass extends ValidatableModel {
    @excludeJSON()
    property: string;
    aprop: number;
}

let cla = new JSONClass();
cla.property = 'something';
cla.aprop = 42;

cla.toJSON();
```

This will output:
``` json
{"aprop": 42}
```

notice the excluded property of `property` is not included.

### FROM JSON/Object

``` typescript
@Model()
export class ClassWithProperties extends ValidatableModel {
    @required()
    prop: string;
    another: number;
    array: SomeType[];
}
```

Call your api and get this JSON string back.
``` json
{
    "prop": "a string",
    "another": 42,
    "array": ["value", "anothervalue"]
}
```

``` typescript
const jsonString = (api call returned value);

let classWithProperties = new ClassWithProperties();
classWithProperties.fromJSON(jsonString);
// classWithProperties is not populated with values from jsonString

// If you needed to parse the jsonString first
let obj = JSON.parse(jsonString);
classWithProperties.fromObject(obj);
// classWithProperties is now populated with values from obj
```
