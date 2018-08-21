### The Three Times Function

#### 7 Points

The "threeTimes" function accepts a function object as an argument.  The "threeTimes" function returns a function.  The function returned can only be invoked three times.  Note: The function returned *will also return a value.*

```
var helloWorld = threeTimes(function() { return "Hello World" });

var returnValue = helloWorld() + " "+ helloWorld() + " " + helloWorld() + " " + helloWorld();

// returnValue:  "Hello World Hello World Hello World undefined";
```

Note: On the final invocation of helloWorld() there isn't a return value so the value undefined is concatenated on to the string.  **A closure should be used in your solution, placing
a property on the function will not receive full credit.**