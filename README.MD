# Demgel Validation Decorators

## What is this?
There are times when you want to validate an object and assure that all properties are valid values.

## Example

``` typescript
import {ValidatableModel, Model} from "@demgel/validation";

@Model
export class SomeModel extends ValidatableModel {
    @required
    @isNumber
    aNumber: number;

    @required
    @isString
    aString: string;
}
```

To check that a model is valid just use `isValid()`.

``` typescript
if (someModel.isValid()) {
    // Do something with the data...
} else {
    // report Error
    this.errors.forEach(error => {
        console.log(error);
    };
}
```

If there is an error the model will containn a property called `errors`. `errors` is a `Map<string, string>`.
## Custom Validators

You can write your own validators by using the `generateValidator` function.

``` typescript
export declare function generateValidator(name: string, validator: any): (target: Object, propertyKey: string) => void;
```

``` typescript
export var someValidator = (options) => generateValidator("someValidator", (value) => {
    // Check the value to see if it matches
}

export var anotherValidator = generateValidator("anotherValidator", (value) => {
    // Check the value to see if it is correct
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
