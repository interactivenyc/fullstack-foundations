The Call All Function

Create the function "call all" that takes an object and an array of functions as arguments. Invoke each function in the array of functions and assign the context of this in each function to the object passed as the first argument. After each function invocation, store the value in an array and return an array that contains the return values of each function invoked.


// functions
function firstName () {
	return this.first;
}

function lastName () {
	return this.last;
}

const fnArr = [firstName, lastName];


const nameArr = callAll({first: "Nimit", last: "Maru"}, fnArr);

// RETURN VALUE nameArr ===> ["Nimit", "Maru"];
 