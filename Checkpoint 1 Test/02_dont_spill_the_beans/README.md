### Don't Spill The Beans 

#### 7.00 Points

Do you have trouble keeping secrets? Create the function `dontSpillTheBeans` that accepts a `secret` as an argument. The `secret` can be any JavaScript value. The function will **return an object** with two methods:

- `getSecret` is a function that returns the `secret` value that was passed to `dontSpillTheBeans`
- `setSecret`: is a function that accepts a new `secret` and re-assigns the `secret` value to the new value.


Example:

```

var secret = dontSpillTheBeans("I ate John's last piece of gum!");

secret.getSecret(); // returns "I ate John's last piece of gum!"

secret.setSecret("I am planning a surprise vacation!");

secret.getSecret(); // returns "I am planning a surprise vacation!"

```

