function search(func) {
  var bool = false;
  this.forEach((val) => {
    if (func(val)) {
      bool = true;
    } else if (Array.isArray(val) && !bool) {
      bool = search.call(val, func);
    }
  });
  return bool;
}

// using reduce:

// function search(func) {
//   return this.reduce((prev, cur) => {
//     if (func(cur)) {
//       return true;
//     } else if (Array.isArray(cur)) {
//       if (!prev) {
//         return search.call(cur, func);
//       }
//     }
//     return prev;
//   }, false);
// }