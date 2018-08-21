### The newObj Function

#### 6 Points


Create the function "newObj" that takes a constructor function as an argument.  The constructor function has additional properties on its `.prototype` property.  The `newObj` function returns an empty object.  The internal prototype (\__proto__) of the empty object will be the constructor function's `.prototype` object.  

**Note: .\__proto__ should NOT be used in your solution**

```
function Hello() {
  this.hello = "hello";
}

Hello.prototype.sayHello = "Hello";

INPUT: var returnValue = newObj(Hello);

OUTPUT:
// returnValue === {};
// returnValue's internal prototype aka .\__proto__ is: {sayHello: "Hello"}

```