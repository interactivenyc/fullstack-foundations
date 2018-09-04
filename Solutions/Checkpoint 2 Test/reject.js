const reject = (array, fn) => {
  return array.filter(function(val) {
    return !fn(val);
  });
};
// const reject = (array, func) => {
//   const finalArray = [];
//   for(let i = 0; i < array.length; i++){
//       if(!(func(array[i]))){
//           finalArray.push(array[i]);
//       }
//   }
//   return finalArray;
// }
